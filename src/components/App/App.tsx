import Header from '../Header';
import Menu from '../Menu';
import Game from '../Game';
import useBoxSize from './Hooks/useBoxSize';
import { useEffect, useRef, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../helpers/firebase-helper';
import {
  doc,
  getDoc,
  addDoc,
  collection,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import './App.css';
import GameResult from '../GameResult';
import GuessNotification from './GuessNotification';
import { formatUnit as formatTimeUnit } from '../../helpers/time-formatter';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timerData, setTimerData] = useState<TimerData>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [targetingBoxSize] = useBoxSize();

  const [remainingCharacters, setRemainingCharacters] =
    useState<RemainingCharacters>({
      yuna: true,
      kratos: true,
      ratchet: true,
    });

  const [areAllCharactersGuessed, setAreAllCharactersGuessed] =
    useState(false);

  const timerInterval = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (!isGameStarted) {
      setTimerData({ hours: 0, minutes: 0, seconds: 0 });
      timerInterval.current && clearInterval(timerInterval.current);

      return;
    }

    if (areAllCharactersGuessed) {
      timerInterval.current && clearInterval(timerInterval.current);

      return;
    }

    timerInterval.current = setInterval(() => {
      setTimerData((timerData) => {
        let hours = timerData.hours;
        let minutes = timerData.minutes;
        let seconds = timerData.seconds;

        if (seconds >= 0 && seconds !== 60) {
          seconds++;
        }
        if (minutes === 59 && seconds === 60) {
          hours++;
          minutes = 0;
          seconds = 0;
        } else if (seconds === 60) {
          minutes++;
          seconds = 0;
        }

        return { hours, minutes, seconds };
      });

      return () => {
        timerInterval.current && clearInterval(timerInterval.current);
      };
    }, 1000);
  }, [isGameStarted, areAllCharactersGuessed]);

  useEffect(() => {
    setAreAllCharactersGuessed(
      !remainingCharacters.yuna &&
        !remainingCharacters.kratos &&
        !remainingCharacters.ratchet,
    );
  }, [remainingCharacters]);

  useEffect(() => {
    if (areAllCharactersGuessed) {
      /* The game is finished, but the 'started' state still remains,
      as it wasn't stopped and now the user will see the results */
      setTimeout(() => {
        setIsGameFinished(true);
      }, 700);
    }
  }, [areAllCharactersGuessed]);

  const [isGameFinished, setIsGameFinished] = useState(false);

  /* Query and save in the state the best user scores */
  /* If current user's score becomes one of them, it'll be updated here as well */

  useEffect(() => {
    if (!isGameFinished) return;

    (async () => {
      try {
        await addDoc(collection(db, 'scores'), {
          hours: timerData.hours,
          minutes: timerData.minutes,
          seconds: timerData.seconds,
          fullTime: `${formatTimeUnit(timerData.hours)}:${formatTimeUnit(
            timerData.minutes,
          )}:${formatTimeUnit(timerData.seconds)}`,
        });
      } catch (err) {
        alert('Something went wrong when saving your score');
      }
    })();
  }, [isGameFinished, timerData]);

  const scoresQuery = query(
    collection(db, 'scores'),
    orderBy('fullTime', 'asc'),
    limit(10),
  );

  const [scoresSnapshot] = useCollection(scoresQuery);

  /* When the user makes a guess, the app shows an in-game notification
  about guess result and the guessed character name */

  const [guessNotificationText, setGuessNotificationText] = useState<
    null | string
  >(null);

  const handleUserGuess = async function (
    option: string,
    x: number | null,
    y: number | null,
  ) {
    if (!x || !y) return;

    // Calculate absolute coordinates, independent of the viewport width.
    // The smaller the window, the smaller the obtaied X/Y.
    // Diving the coordinate by window width and rounding it
    // will always produce the same result if we click on the same place
    // For example, 172(obtained x)/278(innerWidth) gives ~0.2, so does 843/1330
    // Multiplying it by 100 simply makes 20 out of 2.
    // The bigger the multiplier, the bigger the precision
    const absoluteX = Math.round((x / window.innerWidth) * 100);
    const absoluteY = Math.round((y / window.innerWidth) * 100);
    let realAbsoluteCoordinates: [x: number, y: number];

    try {
      // Get real coordinates for the option from the backend
      const docRef = doc(db, 'coordinates', 'characters');
      const optionCoordinates = await getDoc(docRef);

      if (!optionCoordinates.exists()) {
        throw new Error('These coordinates do not exist');
      }

      realAbsoluteCoordinates = optionCoordinates.data()[option] as [
        x: number,
        y: number,
      ];
    } catch (err) {
      alert(err);
      return;
    }

    // After clicking the screen, the user was presented with a box.
    // If the character is within the range of this box (not at the particular click coordinate)
    // Then they've successfully guessed it

    // Get these possible ranges
    // targetingBoxSize is converted to 'absolute' units as well
    const rangeX: [xMin: number, xMax: number] = [
      absoluteX -
        Math.round(((targetingBoxSize / window.innerWidth) * 100) / 2),
      absoluteX +
        Math.round(((targetingBoxSize / window.innerWidth) * 100) / 2),
    ];

    const rangeY: [yMin: number, yMax: number] = [
      absoluteY - targetingBoxSize / 2,
      absoluteY + targetingBoxSize / 2,
    ];

    // Check if the coordinates from the backend (where the character actually is)
    // are within this box

    const isGuessed =
      realAbsoluteCoordinates[0] >= rangeX[0] &&
      realAbsoluteCoordinates[0] <= rangeX[1] &&
      realAbsoluteCoordinates[1] >= rangeY[0] &&
      realAbsoluteCoordinates[1] <= rangeY[1];

    if (isGuessed) {
      setRemainingCharacters({
        ...remainingCharacters,
        [option.toLowerCase()]: false,
      });

      setGuessNotificationText(
        `Yes! That's ${option[0].toUpperCase() + option.slice(1)}!`,
      );
    } else {
      setGuessNotificationText(
        () =>
          `No, that's not ${option[0].toUpperCase() + option.slice(1)}`,
      );
    }

    setTimeout(() => {
      setGuessNotificationText(() => null);
    }, 2200);
  };

  const handlePlayAgain = function () {
    setIsGameStarted(false);
    setRemainingCharacters({ yuna: true, kratos: true, ratchet: true });
    setAreAllCharactersGuessed(false);
    setIsGameFinished(false);
  };

  return (
    <>
      {isGameStarted ? (
        <Header
          isGameStarted={true}
          timerData={timerData}
          remainingCharacters={remainingCharacters}
        />
      ) : (
        <>
          <Header isGameStarted={false} />
          <Menu onGameStart={() => setIsGameStarted(true)} />
        </>
      )}
      {isGameFinished ? (
        <>
          <Game
            targetingBoxSize={targetingBoxSize}
            remainingCharacters={remainingCharacters}
            shouldHideTargetingBox={areAllCharactersGuessed}
          />
          <GameResult
            scoresData={
              scoresSnapshot?.docs.map(
                (doc) => doc.data().fullTime as string,
              ) || []
            }
            onPlayAgain={handlePlayAgain}
            time={timerData}
          />
        </>
      ) : (
        <Game
          onUserGuess={handleUserGuess}
          targetingBoxSize={targetingBoxSize}
          shouldHideTargetingBox={areAllCharactersGuessed}
          remainingCharacters={remainingCharacters}
        />
      )}
      {guessNotificationText && (
        <GuessNotification text={guessNotificationText} />
      )}
    </>
  );
}

export default App;

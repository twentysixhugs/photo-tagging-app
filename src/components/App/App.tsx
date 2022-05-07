import Header from '../Header';
import Menu from '../Menu';
import Game from '../Game';
import useBoxSize from './Hooks/useBoxSize';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../helpers/firebase-helper';
import { doc, getDoc } from 'firebase/firestore';
import './App.css';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [targetingBoxSize] = useBoxSize();

  const [remainingCharacters, setRemainingCharacters] =
    useState<RemainingCharacters>({
      yuna: true,
      kratos: true,
      ratchet: true,
    });

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

    if (
      realAbsoluteCoordinates[0] >= rangeX[0] &&
      realAbsoluteCoordinates[0] <= rangeX[1] &&
      realAbsoluteCoordinates[1] >= rangeY[0] &&
      realAbsoluteCoordinates[1] <= rangeY[1]
    ) {
      setRemainingCharacters({
        ...remainingCharacters,
        [option.toLowerCase()]: false,
      });
    }
  };

  return (
    <>
      {isGameStarted ? (
        <Header
          isGameStarted={true}
          timerData={{ hours: 1, minutes: 1, seconds: 1 }}
          remainingCharacters={remainingCharacters}
        />
      ) : (
        <>
          <Header isGameStarted={false} />
          <Menu onGameStart={() => setIsGameStarted(true)} />
        </>
      )}
      <Game
        onUserGuess={handleUserGuess}
        targetingBoxSize={targetingBoxSize}
      />
    </>
  );
}

export default App;

import Header from '../Header';
import Menu from '../Menu';
import './App.css';
import { useState } from 'react';
import Game from '../Game';
import useBoxSize from './Hooks/useBoxSize';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [targetingBoxSize] = useBoxSize();

  const handleUserGuess = function (
    option: string,
    x: number | null,
    y: number | null,
  ) {
    console.log(option, x, y);
    // TODO: Get screen width which defines the size of the box.
    // Depending on the size, create a range of valid coordinates
  };

  return (
    <>
      {isGameStarted ? (
        <Header
          isGameStarted={true}
          timerData={{ hours: 1, minutes: 1, seconds: 1 }}
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

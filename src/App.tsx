import Header from './components/Header';
import Menu from './components/Menu';
import './App.css';
import { useState } from 'react';
import Game from './components/Game';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleUserGuess = function (option: string) {
    console.log(option);
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
      <Game onUserGuess={handleUserGuess} />
    </>
  );
}

export default App;

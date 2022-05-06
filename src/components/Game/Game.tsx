import { useState } from 'react';
import UserGuess from './UserGuess';
import useClickCoordinates from './Hooks/useClickCoordinates';
import './Game.css';
import gameImgWEBP from './Game.webp';
import gameImgJPG from './Game.jpg';

export interface GameProps {
  onUserGuess: (option: string) => void;
}

export default function Game({ onUserGuess }: GameProps) {
  const [isScreenClicked, setIsScreenClicked] = useState(false);

  const [x, y, setClickCoordinates] = useClickCoordinates();

  return (
    <div
      className="c-game"
      onClick={(e) => {
        setIsScreenClicked(!isScreenClicked);
        setClickCoordinates(e);
      }}
    >
      {isScreenClicked && (
        /* Pass in the coordinates of the click so that we can
        show the targeting box at these coordinates */
        <UserGuess
          style={{
            position: 'absolute',
            zIndex: '1',
            top: `${y || 0}px`,
            left: `${x || 0}px`,
          }}
          onUserGuess={onUserGuess}
        />
      )}
      <img
        className="c-game__img"
        srcSet={`${gameImgWEBP}, ${gameImgJPG}`}
      />
    </div>
  );
}

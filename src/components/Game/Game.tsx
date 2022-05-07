import { useState } from 'react';
import UserGuess from './UserGuess';
import useClickCoordinates from './Hooks/useClickCoordinates';
import './Game.css';
import gameImgWEBP from './Game.webp';
import gameImgJPG from './Game.jpg';

export interface GameProps {
  onUserGuess?: (
    option: string,
    x: number | null,
    y: number | null,
  ) => void;
  targetingBoxSize: 30 | 80;
}

export default function Game({
  onUserGuess,
  targetingBoxSize,
}: GameProps) {
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
        /* Depending on the box size, define its position */
        <UserGuess
          style={{
            position: 'absolute',
            zIndex: '1',
            top: `${(y && y - targetingBoxSize / 2) || 0}px`,
            left: `${
              (x &&
                (targetingBoxSize === 30
                  ? x - targetingBoxSize * 1.5
                  : x - targetingBoxSize / 2)) ||
              0
            }px`,
          }}
          onUserGuess={onUserGuess}
          x={x}
          y={y}
        />
      )}
      <img
        className="c-game__img"
        srcSet={`${gameImgWEBP}, ${gameImgJPG}`}
      />
    </div>
  );
}

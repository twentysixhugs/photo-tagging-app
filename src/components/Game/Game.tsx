import { useState, useRef } from 'react';
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
      {isScreenClicked && <UserGuess onUserGuess={onUserGuess} />}
      <img
        className="c-game__img"
        srcSet={`${gameImgWEBP}, ${gameImgJPG}`}
      />
    </div>
  );
}

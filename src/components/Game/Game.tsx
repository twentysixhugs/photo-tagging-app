import { useState } from 'react';
import UserGuess from './UserGuess';
import './Game.css';
import gameImgWEBP from './Game.webp';
import gameImgJPG from './Game.jpg';

export interface GameProps {
  onUserGuess: (option: string) => void;
}

export default function Game({ onUserGuess }: GameProps) {
  const [isScreenClicked, setIsScreenClicked] = useState(false);

  return (
    <div
      className="c-game"
      onClick={() => setIsScreenClicked(!isScreenClicked)}
    >
      {isScreenClicked && <UserGuess onUserGuess={onUserGuess} />}
      <img
        className="c-game__img"
        srcSet={`${gameImgWEBP}, ${gameImgJPG}`}
      />
    </div>
  );
}

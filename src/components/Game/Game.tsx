import { useState } from 'react';
import UserGuess from './UserGuess';

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
    </div>
  );
}

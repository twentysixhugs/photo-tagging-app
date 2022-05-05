import React from 'react';
import TargetingBox from './TargetingBox';
import { GameProps } from '../Game';

type UserGuessProps = Pick<GameProps, 'onUserGuess'>;

export default function UserGuess({ onUserGuess }: UserGuessProps) {
  return (
    <div className="c-user-guess">
      <TargetingBox />
      <button
        onClick={() => {
          onUserGuess('Option 1');
        }}
        className="c-user-guess__option"
      >
        Option 1
      </button>
      <button
        onClick={() => {
          onUserGuess('Option 2');
        }}
        className="c-user-guess__option"
      >
        Option 2
      </button>
      <button
        onClick={() => {
          onUserGuess('Option 3');
        }}
        className="c-user-guess__option"
      >
        Option 3
      </button>
    </div>
  );
}

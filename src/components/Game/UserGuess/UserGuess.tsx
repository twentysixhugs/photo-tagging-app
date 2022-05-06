import React from 'react';
import TargetingBox from './TargetingBox';
import { GameProps } from '../Game';

/* Take specific props from GameProps and take an object with styling */
/* Since it has a dynamic positioning, it needs to accept different coordinates */
type UserGuessProps = Pick<GameProps, 'onUserGuess'> & { style: Style };

export default function UserGuess({ onUserGuess, style }: UserGuessProps) {
  return (
    <div style={{ ...style }} className="c-user-guess">
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

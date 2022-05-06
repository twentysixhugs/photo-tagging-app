import React from 'react';
import TargetingBox from './TargetingBox';
import { GameProps } from '../Game';
import './UserGuess.css';

/* Take specific props from GameProps and take an object with styling */
/* Since it has a dynamic positioning, it needs to accept different coordinates */
type UserGuessProps = Pick<GameProps, 'onUserGuess'> & {
  style: Style;
  x: number | null;
  y: number | null;
};

export default function UserGuess({
  onUserGuess,
  style,
  x,
  y,
}: UserGuessProps) {
  return (
    <div style={{ ...style }} className="c-user-guess">
      <TargetingBox />
      <button
        onClick={() => {
          onUserGuess('Yuna', x, y);
        }}
        className="c-user-guess__option"
      >
        Yuna
      </button>
      <button
        onClick={() => {
          onUserGuess('Kratos', x, y);
        }}
        className="c-user-guess__option"
      >
        Kratos
      </button>
      <button
        onClick={() => {
          onUserGuess('Ratchet', x, y);
        }}
        className="c-user-guess__option"
      >
        Ratchet
      </button>
    </div>
  );
}

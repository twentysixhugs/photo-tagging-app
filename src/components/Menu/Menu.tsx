import React from 'react';
import Rules from './Rules';
import Characters from './Characters';
import StartButton from './StartButton';

export default function Menu({
  onGameStart,
}: {
  onGameStart: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="c-menu">
      <Rules />
      <Characters />
      <StartButton onClick={onGameStart} />
    </div>
  );
}

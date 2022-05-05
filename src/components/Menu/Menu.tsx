import React from 'react';
import Rules from './Rules';
import Characters from '../Characters';
import StartButton from './StartButton';
import './Menu.css';

export default function Menu({
  onGameStart,
}: {
  onGameStart: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="c-menu">
      <div className="c-menu__menu-content">
        <Rules />
        <Characters />
        <StartButton onClick={onGameStart} />
      </div>
    </div>
  );
}

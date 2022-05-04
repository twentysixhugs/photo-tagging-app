import React from 'react';

export default function StartButton({
  onClick,
}: {
  onClick: React.MouseEventHandler;
}) {
  return (
    <button onClick={onClick} className="c-menu__start-btn">
      Start
    </button>
  );
}

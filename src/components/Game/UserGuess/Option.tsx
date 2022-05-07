import React from 'react';

type OptionProps = {
  name: string;
  onClick: React.MouseEventHandler;
};

export default function Option({ name, onClick }: OptionProps) {
  return (
    <button onClick={onClick} className="c-user-guess__option">
      {name}
    </button>
  );
}

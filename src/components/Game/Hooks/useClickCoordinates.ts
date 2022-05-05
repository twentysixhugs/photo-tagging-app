import React, { useState, useCallback } from 'react';

export default function useClickCoordinates(): [
  number | null,
  number | null,
  (e: React.MouseEvent) => void,
] {
  const [x, setX] = useState<null | number>(null);
  const [y, setY] = useState<null | number>(null);

  const handleClick = function (e: React.MouseEvent) {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    setX(e.clientX - rect.left);
    setY(e.clientY - rect.top);
  };

  return [x, y, handleClick];
}

import { useState, useEffect } from 'react';

/* On small screens, the targeting box should be smaller.
This hook calculates what size length the square box should have
depending on the screen */

export default function useBoxSize() {
  /* Set initial size value depending on current screen width */

  const [boxSize, setBoxSize] = useState<80 | 30>(
    window.innerWidth < 700 ? 30 : 80,
  );

  useEffect(() => {
    const onMediaChange = function () {
      setBoxSize(window.innerWidth < 700 ? 30 : 80);
    };

    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addEventListener('change', onMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', onMediaChange);
    };
  }, [boxSize]);

  return [boxSize];
}

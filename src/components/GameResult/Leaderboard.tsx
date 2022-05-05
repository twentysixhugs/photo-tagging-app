import React from 'react';

interface Props {
  scoresData: string[];
}

export default function Leaderboard({ scoresData }: Props) {
  return (
    <div className="c-game-result__leaderboard">
      {scoresData.map((score, i) => (
        <React.Fragment key={i}>
          <span className="c-game-result__score c-game-result__score--place">
            {i + 1}
          </span>
          <span className="c-game-result__score c-game-result__score--time">
            {score}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

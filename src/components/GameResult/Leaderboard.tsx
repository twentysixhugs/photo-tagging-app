import React from 'react';
import { GameResultProps } from './GameResult';

type LeaderboardProps = Pick<GameResultProps, 'scoresData'>;

export default function Leaderboard({ scoresData }: LeaderboardProps) {
  return (
    <div className="c-game-result__leaderboard">
      <h1 className="c-game-result__heading">High scores</h1>
      <div className="c-game-result__scores">
        {scoresData.map((score, i) => (
          <React.Fragment key={i}>
            <span className="c-game-result__score c-game-result__score--place">
              {i + 1}. {score}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

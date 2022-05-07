import Leaderboard from './Leaderboard';
import Stats from './Stats';
import PlayAgain from './PlayAgain';
import './GameResult.css';

export interface GameResultProps {
  scoresData: string[];
  onPlayAgain: React.MouseEventHandler<HTMLButtonElement>;
  time: TimerData;
}

export default function GameResult({
  scoresData,
  onPlayAgain,
  time,
}: GameResultProps) {
  return (
    <div className="c-game-result">
      <div className="c-game-result__content">
        <Leaderboard scoresData={scoresData} />
        <div className="c-game-result__wrapper">
          <Stats time={time} />
          <PlayAgain onPlayAgain={onPlayAgain} />
        </div>
      </div>
    </div>
  );
}

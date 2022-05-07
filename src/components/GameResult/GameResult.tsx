import Leaderboard from './Leaderboard';
import Stats from './Stats';
import PlayAgain from './PlayAgain';
import './GameResult.css';

export interface GameResultProps {
  scoresData: string[];
  onPlayAgain: React.MouseEventHandler<HTMLButtonElement>;
  time: TimerData;
  place: string;
}

export default function GameResult({
  scoresData,
  onPlayAgain,
  time,
  place,
}: GameResultProps) {
  return (
    <div className="c-game-result">
      <div className="c-game-result__content">
        <Leaderboard scoresData={scoresData} />
        <div className="c-game-result__wrapper">
          <Stats time={time} place={place} />
          <PlayAgain onPlayAgain={onPlayAgain} />
        </div>
      </div>
    </div>
  );
}

import Leaderboard from './Leaderboard';
import Stats from './Stats';
import PlayAgain from './PlayAgain';

export interface GameResultProps {
  scoresData: string[];
  onPlayAgain: React.MouseEventHandler<HTMLButtonElement>;
  time: string;
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
      <Leaderboard scoresData={scoresData} />
      <Stats time={time} place={place} />
      <PlayAgain onPlayAgain={onPlayAgain} />
    </div>
  );
}

import { GameResultProps } from './GameResult';

type StatsProps = Pick<GameResultProps, 'time' | 'place'>;

export default function Stats({ time, place }: StatsProps) {
  return (
    <>
      <span className="c-game-result__time">{time}</span>
      <span className="c-game-result__place">Your place: {place}</span>
    </>
  );
}

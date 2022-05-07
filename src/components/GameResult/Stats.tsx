import { GameResultProps } from './GameResult';
import Timer from '../Timer';

type StatsProps = Pick<GameResultProps, 'time' | 'place'>;

export default function Stats({ time, place }: StatsProps) {
  return (
    <>
      <Timer
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />
      <span className="c-game-result__place">Your place: {place}</span>
    </>
  );
}

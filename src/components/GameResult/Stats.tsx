import { GameResultProps } from './GameResult';
import Timer from '../Timer';

type StatsProps = Pick<GameResultProps, 'time' | 'place'>;

export default function Stats({ time, place }: StatsProps) {
  return (
    <>
      <h1 className="c-game-result__heading">Time</h1>
      <Timer
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />
      <span className="c-game-result__place">Your place: {place}</span>
    </>
  );
}

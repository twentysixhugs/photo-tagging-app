import { GameResultProps } from './GameResult';
import Timer from '../Timer';

type StatsProps = Pick<GameResultProps, 'time'>;

export default function Stats({ time }: StatsProps) {
  return (
    <>
      <h1 className="c-game-result__heading">Time</h1>
      <Timer
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />
    </>
  );
}

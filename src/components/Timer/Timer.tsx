import { formatUnit } from '../../helpers/time-formatter';

export default function Timer({ hours, minutes, seconds }: TimerData) {
  return (
    <div className="c-timer">
      {formatUnit(hours)}:{formatUnit(minutes)}:{formatUnit(seconds)}
    </div>
  );
}

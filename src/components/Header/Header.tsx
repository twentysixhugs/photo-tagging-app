import Characters from '../Characters';
import Timer from './Timer';

type HeaderProps =
  | { isGameStarted: false; timerData?: TimerData }
  | { isGameStarted: true; timerData: TimerData };

export default function Header({ isGameStarted, timerData }: HeaderProps) {
  return (
    <header
      className={`c-header ${isGameStarted && 'c-header--game-started'}`}
    >
      <span className="c-header__game-name">FindMe</span>
      {isGameStarted && (
        <>
          <Characters />
          <Timer
            hours={timerData.hours}
            minutes={timerData.minutes}
            seconds={timerData.seconds}
          />
        </>
      )}
    </header>
  );
}

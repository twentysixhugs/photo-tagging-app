import Characters from '../Characters';
import Timer from './Timer';

export default function Header({
  isGameStarted,
  timerData,
}: {
  isGameStarted: boolean;
  timerData?: ITimerData;
}) {
  return (
    <header
      className={`c-header ${isGameStarted && 'c-header--game-started'}`}
    >
      <span className="c-header__game-name">FindMe</span>
      {isGameStarted && (
        <>
          <Characters />
          {timerData && (
            <Timer
              hours={timerData.hours}
              minutes={timerData.minutes}
              seconds={timerData.seconds}
            />
          )}
        </>
      )}
    </header>
  );
}

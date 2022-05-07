import Characters from '../Characters';
import Timer from '../Timer';
import './Header.css';

type HeaderProps = (
  | { isGameStarted: false; timerData?: TimerData }
  | { isGameStarted: true; timerData: TimerData }
) & { remainingCharacters?: RemainingCharacters };

export default function Header({
  isGameStarted,
  timerData,
  remainingCharacters,
}: HeaderProps) {
  return (
    <header
      className={`c-header${
        isGameStarted ? ' c-header--game-started' : ''
      }`}
    >
      <span className="c-header__game-name">FindMe</span>
      {isGameStarted && (
        <>
          <Characters remainingCharacters={remainingCharacters} />
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

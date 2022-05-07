import TargetingBox from './TargetingBox';
import { GameProps } from '../Game';
import './UserGuess.css';
import Option from './Option';

/* Take specific props from GameProps and take an object with styling */
/* Since it has a dynamic positioning, it needs to accept different coordinates */
type UserGuessProps = Pick<
  GameProps,
  'onUserGuess' | 'remainingCharacters'
> & {
  style: Style;
  x: number | null;
  y: number | null;
};

export default function UserGuess({
  onUserGuess,
  style,
  x,
  y,
  remainingCharacters,
}: UserGuessProps) {
  /* onUserGuess may be undefined and it's intetional
  If a user removes the 'game result' component
  from the source after game ends and this component is shown,
  they won't be able to make another db query */
  return (
    <div style={{ ...style }} className="c-user-guess">
      <TargetingBox />
      {remainingCharacters.yuna && (
        <Option
          onClick={() => {
            onUserGuess && onUserGuess('Yuna', x, y);
          }}
          name="Yuna"
        />
      )}
      {remainingCharacters.kratos && (
        <Option
          onClick={() => {
            onUserGuess && onUserGuess('Kratos', x, y);
          }}
          name="Kratos"
        />
      )}
      {remainingCharacters.ratchet && (
        <Option
          onClick={() => {
            onUserGuess && onUserGuess('Ratchet', x, y);
          }}
          name="Ratchet"
        />
      )}
    </div>
  );
}

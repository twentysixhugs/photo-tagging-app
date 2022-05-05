import { GameResultProps } from './GameResult';

type PlayAgainProps = Pick<GameResultProps, 'onPlayAgain'>;

export default function PlayAgain({ onPlayAgain }: PlayAgainProps) {
  return (
    <button
      onClick={onPlayAgain}
      className="c-game-result__play-again-btn"
    >
      Play again
    </button>
  );
}

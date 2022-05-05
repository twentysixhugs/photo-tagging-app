interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PlayAgain({ onClick }: Props) {
  return (
    <button onClick={onClick} className="c-game-result__play-again-btn">
      Play again
    </button>
  );
}

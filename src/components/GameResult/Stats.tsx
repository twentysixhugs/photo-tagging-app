interface Props {
  time: string;
  place: string;
}

export default function Stats({ time, place }: Props) {
  return (
    <>
      <span className="c-game-result__time">{time}</span>
      <span className="c-game-result__place">Your place: {place}</span>
    </>
  );
}

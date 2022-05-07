export default function Timer({ hours, minutes, seconds }: TimerData) {
  const formatUnit: (unit: number) => string = (unit) => {
    return unit < 10 ? `0${unit}` : String(unit);
  };
  return (
    <div className="c-timer">
      {formatUnit(hours)}:{formatUnit(minutes)}:{formatUnit(seconds)}
    </div>
  );
}

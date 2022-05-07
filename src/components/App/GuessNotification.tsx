type GuessNotificationProps = {
  text: string;
};

export default function GuessNotification({
  text,
}: GuessNotificationProps) {
  return (
    <div className="c-guess-notification">
      <span className="c-guess-notification__text">{text}</span>
    </div>
  );
}

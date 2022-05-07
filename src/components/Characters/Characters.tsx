import './Characters.css';
import yunaIMG from '../../assets/Yuna-small.svg';
import kratosIMG from '../../assets/Kratos-small.svg';
import ratchetIMG from '../../assets/Ratchet-small.svg';

type CharactersProps = {
  remainingCharacters?: RemainingCharacters;
};

export default function Characters({
  remainingCharacters,
}: CharactersProps) {
  function getCharacterClassName(
    characterName: 'yuna' | 'kratos' | 'ratchet',
  ) {
    return remainingCharacters
      ? remainingCharacters[characterName]
        ? 'c-characters__character'
        : 'c-characters__character c-characters__character--guessed'
      : 'c-characters__character';
  }

  return (
    <div className="c-characters">
      <div className={getCharacterClassName('yuna')}>
        <img src={yunaIMG} alt=""></img>
        <span>Yuna</span>
      </div>
      <div className={getCharacterClassName('kratos')}>
        <img src={kratosIMG} alt=""></img>
        <span>Kratos</span>
      </div>
      <div className={getCharacterClassName('ratchet')}>
        <img src={ratchetIMG} alt=""></img>
        <span>Ratchet</span>
      </div>
    </div>
  );
}

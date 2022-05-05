import './Characters.css';
import YunaIMG from '../../assets/Yuna-small.svg';
import KratosIMG from '../../assets/Kratos-small.svg';
import RatchetIMG from '../../assets/Ratchet-small.svg';

export default function Characters() {
  return (
    <div className="c-characters">
      <div className="c-characters__character">
        <img src={YunaIMG} alt=""></img>
        <span>Yuna</span>
      </div>
      <div className="c-characters__character">
        <img src={KratosIMG} alt=""></img>
        <span>Kratos</span>
      </div>
      <div className="c-characters__character">
        <img src={RatchetIMG} alt=""></img>
        <span>Ratchet</span>
      </div>
    </div>
  );
}

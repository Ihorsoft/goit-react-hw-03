import s from "./InputEffect.module.css";
import ss from "../switchday/SwitchDay.module.css";

const InputEffect = () => {
  return (
    <div>
      <input className={s.inputbox} type="text" placeholder="input you data" />
    </div>
  );
};

export default InputEffect;

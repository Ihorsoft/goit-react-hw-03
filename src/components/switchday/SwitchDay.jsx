import s from "../switchday/SwitchDay.module.css";

const SwitchDay = () => {
  return (
    // <div> </div>
    <label className={s.switch}>
      <span>
        <i className={`${s.far} ${s.faSun}`}></i>
      </span>
      <span>
        <i className={`${s.far} ${s.faMoon}`}></i>
      </span>
      <input type="checkbox" />
      <span className={s.move}></span>
    </label>
  );
};

export default SwitchDay;

import s from "./SuperButton.module.css";
import classNames from "classname";

const SuperButton = () => {
  //  const clasline = { s.buttonline};
  const classlineleft = "buttonline--left";
  const classlineright = "buttonline--right";
  const classlinebottom = "buttonline--bottom";
  const classlinetop = "buttonline--top";

  return (
    <div>
      <a href="#" className={s.button}>
        <span className={classNames(s.buttonline, s.buttonlinetop)}></span>
        <span className={classNames(s.buttonline, s.buttonlineright)}></span>
        <span className={classNames(s.buttonline, s.buttonlinebottom)}></span>
        <span className={classNames(s.buttonline, s.buttonlineleft)}></span>
        Super Button
      </a>
    </div>
  );
};

export default SuperButton;

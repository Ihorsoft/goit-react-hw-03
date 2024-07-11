import { useState } from "react";
import s from "./Options.module.css";

const Options = ({ feedbackObj, totalFeedback, updateFeedback }) => {
  const { good, neutral, bad } = feedbackObj;

  return (
    <div>
      <div className={s.list}>
        <button onClick={() => updateFeedback("good")} className={s.item}>
          Good
        </button>
        <button onClick={() => updateFeedback("neutral")} className={s.item}>
          Neutral
        </button>
        <button onClick={() => updateFeedback("bad")} className={s.item}>
          Bad
        </button>
        {totalFeedback !== 0 ? (
          <button onClick={() => updateFeedback("reset")} className={s.item}>
            Reset
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Options;

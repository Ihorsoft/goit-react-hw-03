import Options from "../options/Options";
import s from "./Feedback.module.css";

const Feedback = ({ feedbackObj, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={s.item}>
        <li className={s.item}>Good {feedbackObj.good}</li>
        <li>Neutral {feedbackObj.neutral}</li>
        <li>Bad {feedbackObj.bad}</li>
        <li>Total {totalFeedback}</li>
        <li>Positive {positiveFeedback} %</li>
      </ul>
    </div>
  );
};
export default Feedback;

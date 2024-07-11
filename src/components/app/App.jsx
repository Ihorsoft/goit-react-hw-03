import { useEffect, useState } from "react";

import "./App.css";
import Description from "../description/Description";
import Feedback from "../feedback/Feedback.jsx";
import Options from "../options/Options";
import Notification from "../notification/Notification.jsx";
import SwitchDay from "../switchday/SwitchDay.jsx";

import LoginForm from "../loginform/LoginForm.jsx";
import InputEffect from "../inputeffect/InputEffect.jsx";
import SuperButton from "../superbutton/SuperButton.jsx";
import FeedbackForm from "../FeedbackForm/FeedbackForm.jsx";

function App() {
  const handleLogin = (userData) => {
    console.log("userData for hendleLOgin into APP", userData);
  };

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setFeedbackObj((feedbackObj) => ({
          ...feedbackObj,
          good: feedbackObj.good + 1,
        }));

        break;

      case "neutral":
        setFeedbackObj({
          ...feedbackObj,
          neutral: feedbackObj.neutral + 1,
        });
        break;

      case "bad":
        setFeedbackObj({
          ...feedbackObj,
          bad: feedbackObj.bad + 1,
        });
        break;

      case "reset":
        setFeedbackObj({
          ...feedbackObj,
          good: 0,
          neutral: 0,
          bad: 0,
        });
        break;
    }
  };

  const fObj = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackObj, setFeedbackObj] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("feedback"));
    if (saveData) {
      return saveData;
    } else {
      return fObj;
    }
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbackObj));
  }, [feedbackObj]);

  let totalFeedback = feedbackObj.good + feedbackObj.neutral + feedbackObj.bad;
  let positiveFeedback = 0;
  if (totalFeedback !== 0) {
    positiveFeedback = Math.round((feedbackObj.good / totalFeedback) * 100);
  } else {
    positiveFeedback = 0;
  }

  return (
    <>
      <SuperButton />
      <InputEffect />
      <SwitchDay />
      <LoginForm onLogin={handleLogin} />
      <FeedbackForm />

      {/*  <Description />
      <Options
        feedbackObj={feedbackObj}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackObj={feedbackObj}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )} */}
    </>
  );
}

export default App;

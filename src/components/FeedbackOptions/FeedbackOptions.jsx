// import { useState } from "react"

export default function FeedbackOptions({ changeFeedback, feedback }) {
  const options = Object.keys(feedback);
 
  return (
    <>
      {options.map(option => {
        return (
          <button key={option} onClick={() => changeFeedback(option)}>
            {option}
          </button>
        );
      })}
    </>
  );
}

{
  /* <button type="button" onClick={() => setGood(prevState => prevState + 1)}>
        Good
      </button>
      <button
        type="button"
        onClick={() => setNeutral(prevState => prevState + 1)}
      >
        Neutral
      </button>
      <button type="button" onClick={() => setBad(prevState => prevState + 1)}>
        Bad
      </button> */
}

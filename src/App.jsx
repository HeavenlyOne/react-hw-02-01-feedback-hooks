import { useState, useEffect, useRef } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';

import './App.css';


function App() {
  const defaultState = useRef({ Good: 0, Neutral: 0, Bad: 0 });
  const [feedback, setFeedback] = useState(
    () => JSON.parse(window.localStorage.getItem('feedback')) ?? defaultState.current
  );
  

  const { Good: good, Neutral: neutral, Bad: bad } = feedback;

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const changeFeedback = option => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };
  const resetFeedback = () => {
    setFeedback(defaultState.current);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };
  const posFeed = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();
// localStorage.clear()
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          changeFeedback={changeFeedback}
          feedback={feedback}
          total={total}
          resetFeedback={resetFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics feedback={feedback} posFeed={posFeed} total={total} />
      </Section>
    </>
  );
}

export default App;

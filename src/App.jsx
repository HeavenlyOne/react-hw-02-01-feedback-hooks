import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';

import './App.css';

function App() {
  const [feedback, setFeedback] = useState({ Good: 0, Neutral: 0, Bad: 0 })
  
  const changeFeedback = (option) => {
    setFeedback({...feedback, [option]: feedback[option] + 1})
  }
  

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          changeFeedback={changeFeedback}
          feedback={feedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics feedback={feedback} />
      </Section>
    </>
  );
}

export default App;

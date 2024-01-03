import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = name => {
    if (name === 'good') {
      setGood(state => state + 1);
    }
    if (name === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (name === 'bad') {
      setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const feedbackPercentage = Math.round((good / countTotalFeedback()) * 100);
    return feedbackPercentage + '%';
  };

  const optionsButton = ['good', 'neutral', 'bad'];

  return (
    <div className={css.app_conteiner}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsButton}
          handleFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}

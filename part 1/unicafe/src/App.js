import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const incrementGood = () => {
    setGood(good + 1);
  };
  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };
  const incrementBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <GiveFeedback
        handleClickers={{ incrementGood, incrementNeutral, incrementBad }}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

const GiveFeedback = ({ handleClickers }) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleClickers.incrementGood} text='good' />
      <Button onClick={handleClickers.incrementNeutral} text='neutral' />
      <Button onClick={handleClickers.incrementBad} text='bad' />
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const statisticsExist = () => {
    if (good !== 0 || neutral !== 0 || bad !== 0) {
      return true;
    }
    return false;
  };

  const getAverage = () => {
    return (good - bad) / (good + bad + neutral);
  };

  const getPositivePercentage = () => {
    return (good / (good + bad + neutral)) * 100;
  };

  return (
    <>
      {statisticsExist() ? (
        <div>
          <h1>statistics</h1>
          <table>
            <tbody>
              <Statistic text='good' value={good} />
              <Statistic text='neutral' value={neutral} />
              <Statistic text='bad' value={bad} />
              <Statistic text='all' value={good + neutral + bad} />
              <Statistic text='average' value={getAverage()} />
              <Statistic
                text='positive'
                value={getPositivePercentage() + '%'}
              />
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
        </div>
      )}
    </>
  );
};

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => (
  <tr>
    <td> {text} </td>
    <td> {value} </td>
  </tr>
);

export default App;

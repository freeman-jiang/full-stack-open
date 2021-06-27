import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(() => {
    const votes = new Array(anecdotes.length);
    votes.fill(0);
    return votes;
  });

  const getRandomIndexAnecdotes = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    return randomNum;
  };

  const randomizeAnecdote = () => {
    setSelected(getRandomIndexAnecdotes());
  };

  const upVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const getMostPopularAnecdote = () => {
    const highestNum = Math.max(...votes);
    const index = votes.indexOf(highestNum);

    return (
      <div>
        <div>{anecdotes[index]}</div>
        <p>has {votes[index]} votes</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes</p>
      <button onClick={upVote}>vote</button>
      <button onClick={randomizeAnecdote}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      {getMostPopularAnecdote()}
    </div>
  );
};

export default App;

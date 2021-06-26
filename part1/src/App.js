import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        content={{ part1, part2, part3, exercises1, exercises2, exercises3 }}
      />
      <Total content={{ exercises1, exercises2, exercises3 }} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ content }) => {
  const Part = ({ part, content }) => {
    return (
      <p>
        {part} {content}
      </p>
    );
  };

  return (
    <div>
      <Part part={content.part1} content={content.exercises1} />
      <Part part={content.part2} content={content.exercises2} />
      <Part part={content.part3} content={content.exercises3} />
    </div>
  );
};

const Total = ({ content }) => {
  return (
    <p>
      Number of exercises{' '}
      {content.exercises1 + content.exercises2 + content.exercises3}
    </p>
  );
};

export default App;

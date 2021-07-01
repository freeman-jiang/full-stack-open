import React from 'react';

const style = {
  margin: 0,
  display: 'inline-block',
};
const Entry = ({ person }) => {
  return (
    <p style={style} key={person.id}>
      {person.name} {person.number}
    </p>
  );
};

export default Entry;

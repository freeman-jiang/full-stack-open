import React from 'react';
import Entry from './Entry';

const List = ({ personsDisplay, onDelete }) => {
  return (
    <>
      <h2>Numbers</h2>
      {personsDisplay.map(person => (
        <div key={person.id}>
          <Entry person={person} />
          <button onClick={() => onDelete(person.id)} style={{ marginLeft: 8 }}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default List;

import React from 'react';
import { nanoid } from 'nanoid';

const CountryEntry = ({ country, setSearch }) => {
  return (
    <div key={nanoid()}>
      <p style={{ display: 'inline' }}>{country.name} </p>{' '}
      <button
        onClick={() => {
          setSearch(country.name);
        }}
      >
        Show
      </button>
    </div>
  );
};

export default CountryEntry;

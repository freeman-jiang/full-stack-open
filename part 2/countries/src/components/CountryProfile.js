import React from 'react';
import { nanoid } from 'nanoid';
import Weather from './Weather';

const CountryProfile = ({ filteredCountries, api_key }) => {
  return (
    <div>
      <h1>{filteredCountries[0].name}</h1>
      <p>
        <strong>Capital:</strong> {filteredCountries[0].capital}
      </p>
      <p>
        <strong>Population:</strong> {filteredCountries[0].population}
      </p>
      <h2>Spoken languages</h2>
      <ul>
        {filteredCountries[0].languages.map(language => (
          <li key={nanoid()}>{language.name}</li>
        ))}
      </ul>
      <img
        style={{ width: 500, height: 300 }}
        src={filteredCountries[0].flag}
        alt='flag'
      />
      <Weather api_key={api_key} city={filteredCountries[0].capital} />
    </div>
  );
};

export default CountryProfile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import CountryEntry from './components/CountryEntry';
import CountryProfile from './components/CountryProfile';
const api_key = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          'https://restcountries.eu/rest/v2/all'
        );

        setCountries(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const getDisplay = () => {
    const filteredCountries = countries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredCountries.length === 1) {
      return (
        <CountryProfile
          api_key={api_key}
          filteredCountries={filteredCountries}
        />
      );
    }
    if (filteredCountries.length <= 10) {
      return filteredCountries.map(country => (
        <CountryEntry key={nanoid()} country={country} setSearch={setSearch} />
      ));
    }
    return <p>Too many matches, specify another filter</p>;
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div>
      Search Countries: <input onChange={e => handleChange(e)} value={search} />
      {getDisplay()}
    </div>
  );
}

export default App;

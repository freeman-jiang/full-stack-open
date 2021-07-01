import React from 'react';

const Filter = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      Filter shown with{' '}
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </div>
  );
};

export default Filter;

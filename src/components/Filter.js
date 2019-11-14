import React from 'react';
import Select from 'react-select';

import { SORT_BY_ALPHA, SORT_BY_NEWEST } from '../constants';

const Filter = ({ setSortType, setSearchWord, sortBy }) => {
  const options = [
    { value: SORT_BY_ALPHA, label: 'Alphabetical' },
    { value: SORT_BY_NEWEST, label: 'Newest' },
  ];

  return (
    <form className="box">
      <span>Sort by:</span>
      <Select
        options={options}
        defaultValue={sortBy}
        setValue={sortBy}
        onChange={({ value }) => setSortType(value)}
      />

      <label htmlFor="search">
        <input
          id="search"
          className="search"
          placeholder="Search..."
          onChange={({ target }) => setSearchWord(target.value)}
        />
      </label>
    </form>
  );
};

export default Filter;

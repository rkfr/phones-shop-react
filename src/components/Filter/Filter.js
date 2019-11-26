import './Filter.css';

import React from 'react';
import Select from 'react-select';

import { SORT_BY_ALPHA, SORT_BY_NEWEST } from '../../constants';

const Filter = ({
  setSortType, setSearchWord, sortBy, updateCurrentPage,
}) => {
  const options = [
    { value: SORT_BY_ALPHA, label: 'Alphabetical' },
    { value: SORT_BY_NEWEST, label: 'Newest' },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      borderRadius: '0',
      borderTopLeftRadius: '25px',
      borderBottomLeftRadius: '25px',
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: '#d12829',
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: '#d12829',
    }),
  };

  const onSearch = ({ target }) => {
    setSearchWord(target.value);
    updateCurrentPage(1);
  };

  const onSort = ({ value }) => setSortType(value);

  return (
    <form className="filter">
      <Select
        className="sorting-filter"
        styles={customStyles}
        options={options}
        defaultValue={sortBy}
        setValue={sortBy}
        placeholder="Sort by..."
        isSearchable={false}
        onChange={onSort}
      />

      <label
        className="search-label"
        htmlFor="search"
      >
        <input
          id="search"
          className="search"
          placeholder="Search..."
          onChange={onSearch}
        />
      </label>
    </form>
  );
};

export default Filter;

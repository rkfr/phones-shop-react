import React, { useState } from 'react';

import { SORT_BY_ALPHA, SORT_BY_NEWEST } from '../constants';

export default class Filter extends React.Component {
    state = {
      isOpen: false,
    }


    render() {
      const { setSortType, setSearchWord } = this.props;
      const { isOpen } = this.state;
      const selectClassName = `sorting-filter ${isOpen && 'sorting-filter--open'}`;

      return (
        <form>
          <label className="box">
                    Sort by:
            <select
              className={selectClassName}
              onChange={({ target }) => {
                setSortType(target.value);
              }}
            >
              <option value={SORT_BY_ALPHA}>Alphabetical</option>
              <option value={SORT_BY_NEWEST}>Newest</option>
            </select>
          </label>
          <label>
            <input
              className="search"
              placeholder="Search..."
              onChange={({ target }) => setSearchWord(target.value)}
            />
          </label>
        </form>
      );
    }
}

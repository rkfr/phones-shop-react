import './Pagination.css';

import React from 'react';
import Select from 'react-select';

const Pagination = ({
  currentPage, allPages, updateCurrentPage, updateCardsPerPage,
}) => {
  const options = [
    { value: 6, label: 6 },
    { value: 9, label: 9 },
  ];

  const selectCustomStyles = {
    container: (state) => ({
      ...state,
      width: '80px',
    }),
    control: (state) => ({
      ...state,
      paddingLeft: '7px',
    }),
  };

  const onLastPage = () => updateCurrentPage(allPages);

  const onFirstPage = () => updateCurrentPage(1);

  const onNextPage = () => {
    if (currentPage < allPages) {
      updateCurrentPage(currentPage + 1);
    }
  };

  const onPrevPage = () => {
    if (currentPage > 1) {
      updateCurrentPage(currentPage - 1);
    }
  };

  const getPaginationItemKey = (n) => `pagination-item-${n}`;

  const onUpdateCardsPerPage = ({ value }) => {
    updateCardsPerPage(Number(value));
    updateCurrentPage(1);
  };

  const mapPages = (pages) => new Array(pages).fill(0).map((_, i) => {
    const page = i + 1;

    return (
      <li
        className={`pages-list__item ${(page === currentPage ? 'current-item' : '')}`}
        key={getPaginationItemKey(page)}
      >
        {page}
      </li>
    );
  });

  return (
    <div className="pagination">
      <div className="pagination__controls">
        <button type="button" aria-label="First page" onClick={onFirstPage} className="pagination__button pagination__button--first" />
        <button type="button" aria-label="Previous page" onClick={onPrevPage} className="pagination__button pagination__button--prev" />
        <ul className="pages-list">
          {mapPages(allPages)}
        </ul>
        <button type="button" aria-label="Next page" onClick={onNextPage} className="pagination__button pagination__button--next" />
        <button type="button" aria-label="Last page" onClick={onLastPage} className="pagination__button pagination__button--last" />
      </div>
      <Select
        isSearchable={false}
        options={options}
        styles={selectCustomStyles}
        defaultValue={options[0]}
        onChange={onUpdateCardsPerPage}
      />
    </div>
  );
};

export default Pagination;

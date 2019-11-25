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
        <button type="button" onClick={onFirstPage}>start</button>
        <button type="button" onClick={onPrevPage}>prev</button>
        <ul className="pages-list">
          {mapPages(allPages)}
        </ul>
        <button type="button" onClick={onNextPage}>next</button>
        <button type="button" onClick={onLastPage}>end</button>
      </div>
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={onUpdateCardsPerPage}
      />
    </div>
  );
};

export default Pagination;

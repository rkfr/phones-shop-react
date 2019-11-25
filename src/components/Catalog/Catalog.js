import './Catalog.css';

import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import Pagination from './Pagination/Pagination';
import { sortByAlpha, sortByNewest } from '../../api/sort';
import { SORT_BY_ALPHA } from '../../constants';

const Catalog = ({
  phones, sortBy, searchWord, addToBasket, basketItems,
  cardsPerPage, currentPage, updateCurrentPage, updateCardsPerPage,
}) => {
  const cardsLength = phones.length;
  const allPages = Math.ceil(cardsLength / cardsPerPage);


  const filterPhones = ({ name }) => name.toLowerCase().includes(searchWord.toLowerCase());

  const isItemInBasket = (itemId, items) => {
    if (!items.length) return false;

    if (items.length === 1) {
      return items[0].id === itemId;
    }

    return !!items.find(({ id }) => id === itemId);
  };

  const sortedPhones = (sortBy === SORT_BY_ALPHA)
    ? sortByNewest(phones)
    : sortByAlpha(phones);

  const phonesToShow = (!searchWord && sortedPhones) || sortedPhones.filter(filterPhones);


  return (
    <>
      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        updateCardsPerPage={updateCardsPerPage}
      />
      <ul className="catalog">
        {phonesToShow.map((phone) => (
          <ProductCard
            phone={phone}
            key={phone.id}
            addToBasket={addToBasket}
            isItemInBasket={isItemInBasket(phone.id, basketItems)}
          />
        ))}
      </ul>
    </>
  );
};

export default Catalog;

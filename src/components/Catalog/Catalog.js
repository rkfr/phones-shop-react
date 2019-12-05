import './Catalog.css';

import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import Pagination from './Pagination/Pagination';
import { isItemInBasket, getfilteredPhones, getSortedphones } from '../../helpers';

const Catalog = ({
  phones, sortBy, searchWord, addToBasket, basketItems,
  cardsPerPage, currentPage, updateCurrentPage, updateCardsPerPage,
}) => {
  const sortedPhones = getSortedphones(sortBy, phones);

  const filteredPhones = getfilteredPhones(sortedPhones, searchWord);
  const cardsLength = filteredPhones.length;
  const allPages = Math.ceil(cardsLength / cardsPerPage);

  const getPhonesToShow = () => {
    const lastPhoneToShow = currentPage * cardsPerPage;
    const firstPhoneToShow = lastPhoneToShow - cardsPerPage;
    return ((!searchWord && sortedPhones) || filteredPhones).slice(firstPhoneToShow, lastPhoneToShow);
  };

  return (
    <>
      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        updateCardsPerPage={updateCardsPerPage}
      />
      <ul className="catalog">
        {getPhonesToShow().map((phone) => (
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

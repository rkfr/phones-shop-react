import './Catalog.css';

import React from 'react';
import Pagination from './Pagination/Pagination';
import MemirizedProductList from './ProductList/ProductList';
import { isItemInBasket, getfilteredPhones, getSortedphones } from '../../helpers';

const Catalog = ({
  phones, sortBy, searchWord, addToBasket, basketItems,
  cardsPerPage, currentPage, updateCurrentPage, updateCardsPerPage,
}) => {
  const sortedPhones = getSortedphones()(sortBy, phones);
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
      <MemirizedProductList
        phonesList={getPhonesToShow()}
        isItemInBasket={isItemInBasket}
        addToBasket={addToBasket}
        basketItems={basketItems}
      />
    </>
  );
};

export default Catalog;

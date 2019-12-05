import './Catalog.css';

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pagination from './Pagination/Pagination';
import MemirizedProductList from './ProductList/ProductList';
import Phone from './Phone/Phone';
import { isItemInBasket, getfilteredPhones, getSortedphones } from '../../helpers';

const Catalog = ({
  phones, sortBy, searchWord, addToBasket, basketItems,
  cardsPerPage, currentPage, updateCurrentPage, updateCardsPerPage,
}) => {
  const [isPaginationHidden, setPaginationVisibility] = useState(false);

  const sortedPhones = getSortedphones()(sortBy, phones);
  const filteredPhones = getfilteredPhones(sortedPhones, searchWord);
  const cardsLength = filteredPhones.length;
  const allPages = Math.ceil(cardsLength / cardsPerPage);

  const getPhonesToShow = () => {
    const lastPhoneToShow = currentPage * cardsPerPage;
    const firstPhoneToShow = lastPhoneToShow - cardsPerPage;
    return ((!searchWord && sortedPhones) || filteredPhones)
      .slice(firstPhoneToShow, lastPhoneToShow);
  };

  return (
    <>
      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        updateCardsPerPage={updateCardsPerPage}
        isPaginationHidden={isPaginationHidden}
      />
      <Switch>
        <Route path="/:phoneId">
          <Phone
            addToBasket={addToBasket}
            basketItems={basketItems}
          />
        </Route>
        <Route path="/">
          <MemirizedProductList
            phonesList={getPhonesToShow()}
            isItemInBasket={isItemInBasket}
            addToBasket={addToBasket}
            basketItems={basketItems}
            setPaginationVisibility={setPaginationVisibility}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Catalog;

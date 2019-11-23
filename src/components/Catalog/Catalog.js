import './Catalog.css';

import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import { sortByAlpha, sortByNewest } from '../../api/sort';
import { SORT_BY_ALPHA } from '../../constants';

const Catalog = ({
  phones, sortBy, searchWord, onPhoneSelected, addToBasket, basketItems,
}) => {
  const sortedPhones = (sortBy === SORT_BY_ALPHA)
    ? sortByNewest(phones)
    : sortByAlpha(phones);

  const phonesToShow = (!searchWord && sortedPhones)
            || sortedPhones.filter(({ name }) => name.toLowerCase().includes(searchWord.toLowerCase()));

  const isItemInBasket = (itemId, basketItems) => {
    if (!basketItems.length) return false;

    if (basketItems.length === 1) {
      return basketItems[0].id === itemId;
    }

    return !!basketItems.find(({ id }) => id === itemId);
  }

  return (
    <ul className="catalog">
      {phonesToShow.map((phone) => <ProductCard phone={phone} key={phone.id} addToBasket={addToBasket} isItemInBasket={isItemInBasket(phone.id, basketItems)} />)}
    </ul>
  );
};

export default Catalog;

import './Catalog.css';

import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import { sortByAlpha, sortByNewest } from '../../api/sort';
import { SORT_BY_ALPHA } from '../../constants';

const Catalog = ({
  phones, sortBy, searchWord, onPhoneSelected, addToBasket,
}) => {
  const sortedPhones = (sortBy === SORT_BY_ALPHA)
    ? sortByNewest(phones)
    : sortByAlpha(phones);

  const phonesToShow = (!searchWord && sortedPhones)
            || sortedPhones.filter(({ name }) => name.toLowerCase().includes(searchWord.toLowerCase()));

  return (
    <ul className="catalog">
      {phones.map((phone) => <ProductCard phone={phone} key={phone.id} addToBasket={addToBasket} />)}
    </ul>
  );
};

export default Catalog;

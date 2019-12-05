import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({
  phonesList, isItemInBasket, addToBasket, basketItems,
}) => (
  <ul className="catalog">
    {phonesList.map((phone) => (
      <ProductCard
        phone={phone}
        key={phone.id}
        addToBasket={addToBasket}
        isItemInBasket={isItemInBasket(phone.id, basketItems)}
      />
    ))}
  </ul>
);

const MemirizedProductList = React.memo(ProductList);

export default MemirizedProductList;

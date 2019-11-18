import React from 'react';
import BasketIcon from './media/BasketIcon';
import ProductList from './ProductList';

const Basket = ({ basketItems, removeItem }) => (
  <section>
    <div>
      <BasketIcon
        containerClassName="basket__basket-icon"
        basketColor="#ffffff"
        counterBackground="#d12829"
        count={basketItems.length}
        basketWidth="21px"
        basketHeight="21px"
      />
    </div>

    <ProductList
      productItems={basketItems}
      removeItem={removeItem}
    />
  </section>
);

export default Basket;

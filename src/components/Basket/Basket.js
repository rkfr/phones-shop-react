import './Basket.css';

import React from 'react';
import ProductList from './ProductList/ProductList';
import BasketButtonWithCounter from '../media/BasketButtonWithCounter';

const Basket = ({ ...props }) => {
  const { basketItems, switchBasketVisibility } = props;
  const switchVisibility = () => switchBasketVisibility();

  return (
    <section className="basket">
      <BasketButtonWithCounter
        switchVisibility={switchVisibility}
        length={basketItems.length}
        basketColor="#ffffff"
        counterBackground="#d12829"
        basketWidth="21px"
        basketHeight="21px"
      />

      <ProductList {...props} />
    </section>
  );
};
export default Basket;

import './Basket.css';

import React from 'react';
import BasketIcon from '../media/BasketIcon';
import ProductList from './ProductList/ProductList';

const Basket = ({
  basketItems, removeItemFromBasket, switchBasketVisibility, showBasket, updateBasketItemAmount,
}) => (
  <section className="basket">
    <BasketIcon
      handleClick={() => { switchBasketVisibility(); }}
      containerClassName="basket__basket-icon"
      basketColor="#ffffff"
      counterBackground="#d12829"
      count={basketItems.length}
      basketWidth="21px"
      basketHeight="21px"
    />

    <ProductList
      switchBasketVisibility={switchBasketVisibility}
      showBasket={showBasket}
      productItems={basketItems}
      removeItemFromBasket={removeItemFromBasket}
      updateBasketItemAmount={updateBasketItemAmount}
    />
  </section>
);

export default Basket;

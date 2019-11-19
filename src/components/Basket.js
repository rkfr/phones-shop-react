import React from 'react';
import BasketIcon from './media/BasketIcon';
import ProductList from './ProductList';

const Basket = ({
  basketItems, removeItem, switchBasketVisibility, showBasket,
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
      removeItem={removeItem}
    />
  </section>
);

export default Basket;

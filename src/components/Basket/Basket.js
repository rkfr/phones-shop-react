import './Basket.css';

import React from 'react';
import BasketIcon from '../media/BasketIcon';
import ProductList from './ProductList/ProductList';

const Basket = ({
  basketItems, removeItemFromBasket, switchBasketVisibility, showBasket, updateBasketItemAmount,
}) => {
  const switchVisibility = () => switchBasketVisibility();

  return (
    <section className="basket">
      <button className="basket__basket-icon" onClick={switchVisibility} type="button">
        <span className="basket__items-counter">{basketItems.length}</span>
        <BasketIcon
          basketColor="#ffffff"
          counterBackground="#d12829"
          basketWidth="21px"
          basketHeight="21px"
        />
      </button>


      <ProductList
        switchBasketVisibility={switchBasketVisibility}
        showBasket={showBasket}
        productItems={basketItems}
        removeItemFromBasket={removeItemFromBasket}
        updateBasketItemAmount={updateBasketItemAmount}
      />
    </section>
  );
};
export default Basket;

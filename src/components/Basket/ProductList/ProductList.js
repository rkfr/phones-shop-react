import './ProductList.css';

import React from 'react';
import СrossIcon from '../../media/СrossIcon';
import ProductItem from './ProductItem/ProductItem';

const ProductList = ({
  productItems, showBasket, switchBasketVisibility, removeItem, updateBasketItemAmount,
}) => (

  <div className={showBasket ? 'basket-products basket-products--open overlay' : 'basket-products'}>
    <div className="product-list-wrapper">
      <СrossIcon handleClick={switchBasketVisibility} className="close-product-list" />
      <ul className="product-list">
        {productItems.map(({
          id, name, imageUrl, amount,
        }) => (
          <ProductItem
            key={id}
            imageUrl={imageUrl}
            name={name}
            amount={amount}
            updateBasketItemAmount={updateBasketItemAmount}
            id={id}
          />
        ))}
      </ul>
    </div>


  </div>
);

export default ProductList;

import './ProductList.css';

import React from 'react';
import СrossIcon from '../../media/СrossIcon';
import ProductItem from './ProductItem/ProductItem';
import EmptyBasket from './EmptyBasket/EmptyBasket';

const ProductList = ({
  productItems, showBasket, switchBasketVisibility, removeItemFromBasket, updateBasketItemAmount,
}) => {
  const isBasketEmpty = !productItems.length;

  const renderList = () => (
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
          removeItemFromBasket={removeItemFromBasket}
        />
      ))}
    </ul>
  );

  return (
    <div className={showBasket ? 'basket-products basket-products--open overlay' : 'basket-products'}>
      <div className="product-list-wrapper">
        <СrossIcon
          handleClick={switchBasketVisibility}
          className="close-product-list"
        />
        { isBasketEmpty ? <EmptyBasket /> : renderList()}
      </div>


    </div>
  );
};

export default ProductList;

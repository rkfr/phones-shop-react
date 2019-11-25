import './ProductList.css';

import React from 'react';
import CrossIcon from '../../media/СrossIcon';
import ProductItem from './ProductItem/ProductItem';
import EmptyBasket from './EmptyBasket/EmptyBasket';

const ProductList = ({
  basketItems, showBasket, switchBasketVisibility, removeItemFromBasket, updateBasketItemAmount,
}) => {
  const isBasketEmpty = !basketItems.length;

  const renderList = () => (
    <ul className="product-list">
      {basketItems.map(({
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
        <CrossIcon
          handleClick={switchBasketVisibility}
          className="close-product-list"
        />
        { isBasketEmpty ? <EmptyBasket /> : renderList()}
      </div>


    </div>
  );
};

export default ProductList;

import './ProductList.css';

import React from 'react';
import CrossIcon from '../../media/СrossIcon';
import ProductItem from './ProductItem/ProductItem';
import EmptyBasket from './EmptyBasket/EmptyBasket';

const ProductList = ({
  basketItems, showBasket, switchBasketVisibility,
  removeItemFromBasket, updateBasketItemAmount, clearBasket,
}) => {
  const itemsInBasketCount = basketItems.reduce((count, { amount }) => amount + count, 0);
  const isBasketEmpty = !basketItems.length;

  const renderList = () => {
    const clear = () => clearBasket();
    return (
      <>
        <ul className="pruduct-list-titles">
          <li className="pruduct-list-titles__item">Products</li>
          <li className="pruduct-list-titles__item">Name of product</li>
          <li className="pruduct-list-titles__item">Quantity</li>
          <li className="pruduct-list-titles__item">Remove</li>
        </ul>
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
        <button
          type="button"
          className="clear-cart"
          onClick={clear}
        >
          Clear cart
        </button>
        <div className="total-intems-info">
          Total:
          <span className="total-intems-info__count">
            {itemsInBasketCount}
            {' '}
          items
          </span>
        </div>
      </>
    );
  };

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

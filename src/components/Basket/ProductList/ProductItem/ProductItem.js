import './ProductItem.css';

import React from 'react';
import CrossIcon from '../../../media/СrossIcon';

const ProductItem = ({
  id, name, imageUrl, amount, updateBasketItemAmount, removeItemFromBasket,
}) => {
  const updateAmount = ({ target: { value } }) => updateBasketItemAmount(id, value);

  const addOne = () => {
    updateBasketItemAmount(id, (Number(amount) + 1));
  };

  const minusOne = () => {
    const amountNum = Number(amount);

    if (amountNum > 1) {
      updateBasketItemAmount(id, amountNum - 1);
    }
  };

  const removeItem = () => removeItemFromBasket(id);

  return (
    <li className="product-list__item basket-item">
      <figure className="basket-item__content-wrapper">
        <img src={imageUrl} alt={name} className="basket-item__image" />
        <figcaption className="basket-item__name">{name}</figcaption>
      </figure>
      <div className="amount-control">
        <button type="button" onClick={minusOne} className="amount-control__button">-</button>

        <input
          className="amount-control__input"
          type="text"
          name={name}
          value={amount}
          pattern="[0-9]"
          onChange={updateAmount}
        />
        <button type="button" onClick={addOne} className="amount-control__button">+</button>
      </div>
      <CrossIcon
        className="basket-item__remove"
        fill="#d12829"
        width="23"
        height="23"
        handleClick={removeItem}
      />
    </li>
  );
};

export default ProductItem;

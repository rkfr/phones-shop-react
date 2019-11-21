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

    if (amountNum) {
      updateBasketItemAmount(id, amountNum - 1);
    }
  };

  const removeItem = () => removeItemFromBasket(id);

  return (
    <li className="product-list__item basket-item">
      <img src={imageUrl} alt={name} className="basket-item__image" />
      <span className="basket-item__name">{name}</span>
      <div>
        <button type="button" onClick={minusOne}>-</button>
        <label htmlFor={name}>
          <input
            type="text"
            name={name}
            value={amount}
            pattern="[0-9]"
            onChange={updateAmount}
          />
        </label>
        <button type="button" onClick={addOne}>+</button>
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

import './ProductItem.css';

import React from 'react';
import CrossIcon from '../../../media/СrossIcon';
import NumberField from './NumberField/NumberField';

const ProductItem = ({
  id, name, imageUrl, amount, updateBasketItemAmount,
}) => (
  <li className="product-list__item basket-item">
    <img src={imageUrl} alt={name} className="basket-item__image" />
    <span className="basket-item__name">{name}</span>
    <NumberField
      type="text"
      name="basketItemCount"
      value={amount}
      pattern="[0-9]"
      updateBasketItemAmount={updateBasketItemAmount}
      id={id}
    />
    <CrossIcon
      className="basket-item__remove"
      fill="#d12829"
      width="23"
      height="23"
    />
  </li>
);

export default ProductItem;

import React from 'react';
import BasketIcon from './BasketIcon';

const BasketProductButtonIcon = ({ ...props }) => (
  <span className="product-card__basket-icon" role="img">
    <BasketIcon {...props}/>
  </span>
);

export default BasketProductButtonIcon;
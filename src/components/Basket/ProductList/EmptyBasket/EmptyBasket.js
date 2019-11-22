import './EmptyBasket.css';

import React from 'react';
import BasketIcon from '../../../media/BasketIcon';

const EmptyBasket = () => (
  <div className="empty-basket">
    <BasketIcon
      basketColor="#f1f2f6"
      basketWidth="50%"
      basketHeight="50%"
    />
    <span className="empty-basket__message">You don&apos;t have any items in your cart.</span>
  </div>
);

export default EmptyBasket;

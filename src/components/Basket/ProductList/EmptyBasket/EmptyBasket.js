import './EmptyBasket.css';

import React from 'react';
import BasketIcon from '../../../media/BasketIcon';

const EmptyBasket = () => (
  <div className="empty-basket">
    <BasketIcon containerClassName="empty-basket__icon" />
  </div>
);

export default EmptyBasket;

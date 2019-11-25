import React from 'react';
import BasketIcon from './BasketIcon';

const BasketButtonWithCounter = ({ length, switchVisibility, ...props }) => (
    <button className="basket__basket-icon" type="button" onClick={switchVisibility}>
        <span className="basket__items-counter">{length}</span>
        <BasketIcon {...props} />
    </button>
);

export default BasketButtonWithCounter;
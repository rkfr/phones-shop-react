import React from 'react';
import BasketProductButtonIcon from '../../../media/BasketProductButtonIcon';

const AddButton = ({ isItemInBasket, addPhone, ...props }) => (
  <button
    type="button"
    className="product-card__basket"
    disabled={isItemInBasket}
    onClick={addPhone}
  >
    <span className="product-card__basket-text">
      {isItemInBasket ? '✔' : 'Add'}
    </span>
    <BasketProductButtonIcon {...props} />
  </button>
);

export default AddButton;

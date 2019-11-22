import './ProductCard.css';

import React, { useState } from 'react';
import BasketIcon from '../../media/BasketIcon';

const ProductCard = ({ phone, addToBasket }) => {
  const [isDisabled, toggleDisabled] = useState(false);

  const { imageUrl, name, snippet } = phone;

  // console.log(phone);


  const addPhone = () => {
    addToBasket(phone);
    toggleDisabled(true);
  };

  return (
    <li className="product-card">
      <figure className="product-card__figure">
        <img
          className="product-card__image"
          src={imageUrl}
          alt={name}
        />
        <figcaption className="product-card__product-name">{name}</figcaption>
      </figure>
      <div className="snippet">
        <span className="snippet__text">{snippet}</span>
      </div>
      <div className="product-card__button-group">
        <button
          type="button"
          className="product-card__basket"
          disabled={isDisabled}
          onClick={addPhone}
        >
          <span className="product-card__basket-text">
            {isDisabled ? '✔' : 'Add'}
          </span>
          <span className="product-card__basket-icon" role="img">
            <BasketIcon
              basketWidth="25px"
              basketHeight="25px"
              basketColor="#fff"
            />
          </span>

        </button>
        <button className="product-card__show-button" type="button">Show</button>
      </div>
    </li>
  );
};

export default ProductCard;

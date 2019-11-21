import './ProductCard.css';

import React from 'react';
import BasketIcon from '../../media/BasketIcon';

const ProductCard = ({ phone, addToBasket }) => {
  const { imageUrl, name, snippet } = phone;

  const addPhone = () => addToBasket(phone);

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
          onClick={addPhone}
        >
          <span className="product-card__basket-text">Add</span>
          <BasketIcon
            basketWidth="25px"
            basketHeight="25px"
            basketColor="#fff"
            containerClassName="product-card__basket-icon"
          />
        </button>
        <button className="product-card__show-button" type="button">Show</button>
      </div>
    </li>
  );
};

export default ProductCard;
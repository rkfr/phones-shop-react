import './ProductCard.css';

import React from 'react';
import BasketIcon from '../../media/BasketIcon';

const ProductCard = ({ phone, addToBasket }) => {
  const { imageUrl, name, snippet } = phone;

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
        <div
          className="product-card__basket"
          role="button"
          onClick={() => addToBasket(phone)}
          onKeyDown={() => addToBasket(phone)}
          tabIndex="0"
        >
          <span className="product-card__basket-text">Add</span>
          <BasketIcon
            basketWidth="25px"
            basketHeight="25px"
            basketColor="#fff"
            containerClassName="product-card__basket-icon"
          />
        </div>
        <button className="product-card__show-button" type="button">Show</button>
      </div>
    </li>
  );
};

export default ProductCard;

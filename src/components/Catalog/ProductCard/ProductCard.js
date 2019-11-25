import './ProductCard.css';

import React from 'react';
import AddButton from './AddButton/AddButton';

const ProductCard = ({ phone, addToBasket, isItemInBasket }) => {
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
        <AddButton
          isItemInBasket={isItemInBasket}
          addPhone={addPhone}
          basketWidth="25px"
          basketHeight="25px"
          basketColor="#fff"
        />
        <button className="product-card__show-button" type="button">Show</button>
      </div>
    </li>
  );
};

export default ProductCard;

import './ProductCard.css';

import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import AddButton from '../../media/AddButton';

const ProductCard = ({ phone, addToBasket, isItemInBasket }) => {
  const {
    imageUrl, name, snippet, id,
  } = phone;

  const addPhone = useCallback(() => addToBasket(id, phone), []);

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
        <Link className="product-card__show-button" to={`/${id}`}>
          Show
        </Link>
      </div>
    </li>
  );
};

export default ProductCard;

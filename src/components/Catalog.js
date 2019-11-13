import React from 'react';
import { sortByAlpha, sortByNewest } from '../api/sort';
import { SORT_BY_ALPHA } from '../constants';

const Catalog = ({
  phones, sortBy, searchWord, onPhoneSelected, addToBasket,
}) => {
  const sortedPhones = (sortBy === SORT_BY_ALPHA)
    ? sortByNewest(phones)
    : sortByAlpha(phones);

  const phonesToShow = (!searchWord && sortedPhones)
            || sortedPhones.filter(({ name }) => name.toLowerCase().includes(searchWord.toLowerCase()));

  return (
    <ul className="phones">
      {phonesToShow.map(({
        id, name, snippet, imageUrl,
      }) => (
        <li className="thumbnail" key={id}>
          <a
            href={`#${id}`}
            className="thumb"
            onClick={() => onPhoneSelected(id)}
          >
            <img
              alt={name}
              src={imageUrl}
            />
          </a>

          <div className="phones__btn-buy-wrapper">
            <a
              className="btn btn-success"
              onClick={() => addToBasket(name)}
            >
                            Add
            </a>
          </div>

          <a
            href={`#${id}`}
            onClick={() => onPhoneSelected(id)}
          >
            {name}
          </a>
          <p>{snippet}</p>
        </li>
      ))}
    </ul>
  );
};

export default Catalog;

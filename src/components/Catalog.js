import React from 'react';
import ProductCard from './ProductCard';
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

    <ul className="catalog">
      {phones.map((phone) => <ProductCard phone={phone} key={phone.id} addToBasket={addToBasket} />)}
    </ul>
    // <ul className="phones">
    //   {phonesToShow.map(({
    //     id, name, snippet, imageUrl,
    //   }) => (
    //     <li key={id}>
    //       <div
    //         onClick={() => onPhoneSelected(id)}
    //       >
    //         <img
    //           alt={name}
    //           src={imageUrl}
    //         />
    //       </div>

  //       <div>
  //         <button
  //           type="button"
  //           onClick={() => addToBasket(name)}
  //         >
  //                         Add
  //         </button>
  //       </div>

  //       <a
  //         type="button"
  //         href={`#${id}`}
  //         onClick={() => onPhoneSelected(id)}
  //       >
  //         {name}
  //       </a>
  //       <p>{snippet}</p>
  //     </li>
  //   ))}
  // </ul>
  );
};

export default Catalog;

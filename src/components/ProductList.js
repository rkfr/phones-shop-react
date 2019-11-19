import React from 'react';
import CloseIcon from './media/CloseIcon';

const ProductList = ({
  productItems, showBasket, switchBasketVisibility, removeItem,
}) => (

  <div className={showBasket ? 'basket-products basket-products--open overlay' : 'basket-products'}>
    <div className="product-list-wrapper">
      <CloseIcon handleClick={switchBasketVisibility} className="close-product-list" />
      <ul className="product-list">
        {productItems.map(({ id, name }) => (
          <li key={id} className="product-list__item">
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>


  </div>

  // <div className={`basket-products ${(showBasket && 'overlay basket-products--open')}`}>
  //   <button>close</button>
  //   <CloseIcon />
  //   <ul className="product-list">
  //     {productItems.map(({ id, name }) => (
  //       <li key={id}>
  //         <span>{name}</span>
  //         <button onClick={() => removeItem()}>Remove</button>
  //       </li>
  //     ))}
  //   </ul>
  // </div>

);

export default ProductList;

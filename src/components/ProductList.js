import React from 'react';

const ProductList = ({ productItems, removeItem }) => (
  <ul>
    {productItems.map(({ id, name }) => (
      <li key={id}>
        <span>{name}</span>
        {/* <button onClick={() => removeItem()}>Remove</button> */}
      </li>
    ))}
  </ul>
);

export default ProductList;

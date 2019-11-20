import React from 'react';

const NumberField = ({
  name, type, value, labelText = '', pattern = '', updateBasketItemAmount, id,
}) => (
  <div>
    <button>-</button>
    <label htmlFor={name}>{labelText}</label>
    <input
      type={type}
      name={name}
      value={value}
      pattern={pattern}
      onChange={({ target: { value } }) => updateBasketItemAmount(id, value)}
    />
    <button>+</button>
  </div>
);

export default NumberField;

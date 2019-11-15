import React from 'react';
import BasketIcon from './media/BasketIcon';

const Basket = ({ phones, removeItem }) => {
  const numOfphones = phones.reduce((acc, el) => (acc[el] && (acc[el]++) || (acc[el] = 1), acc), {});

  return (
    <section>
      <div>
        <BasketIcon basketColor="#ffffff" backgroundColor="#3e4144" counterBackground="#d12829" count={phones.length} />
      </div>
      <ul>
        {[...new Set(phones)].map((phone, idx) => (
          <li key={idx} className="basket__item">
            <span>
              {phone}
              {' '}
(x
              {numOfphones[phone]}
)
            </span>
            <button
              type="button"
              onClick={() => { removeItem(phone); }}
              className="removeButton"
            >
                        remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Basket;

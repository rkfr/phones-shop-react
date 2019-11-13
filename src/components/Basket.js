import React from 'react';

const Basket = (props) => {
  const { phones } = props;
  const numOfphones = phones.reduce((acc, el) => (acc[el] && (acc[el]++) || (acc[el] = 1), acc), {});

  return (
    <section>
      <div>
Shopping Cart items:
        <span>{phones.length || 'basket is empty'}</span>
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
              onClick={() => { props.removeItem(phone); }}
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

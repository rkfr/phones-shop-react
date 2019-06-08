import React from 'react';

const Basket = props => {
    return (
        <section>
            <p>Shopping Cart</p>
            <ul>
            {props.phones.map((phone, idx) => (
                <li key={idx}>
                    {phone}
                    <button onClick={() => {props.removeItem(idx)}}>remove</button>
                </li>
            ))}
            </ul>
        </section>
    );
}

export default Basket;
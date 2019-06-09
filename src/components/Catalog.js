import React from 'react';
import {sortByAlpha, sortByNewest} from '../api/sort';

const Catalog = props => {

    const phones = [...props.phones],
        sortedPhones = (props.sortBy === 'age') ?
                        sortByNewest(phones)
                        :
                        sortByAlpha(phones);

    const phonesToShow = (!props.searchWord && sortedPhones) ||
            sortedPhones.filter(phone => phone.name.toLowerCase().includes(props.searchWord.toLowerCase()));
    
    return (
        <ul className="phones">
            {phonesToShow.map(phone => (
                <li className="thumbnail" key={phone.id}>
                    <a 
                        href={`#${phone.id}`} className="thumb"
                        onClick = { () => {
                            props.onPhoneSelected(phone.id)
                        }}
                    >
                        <img 
                            alt={phone.name}
                            src={phone.imageUrl}
                        />
                    </a>
                
                    <div className="phones__btn-buy-wrapper">
                        <a 
                            className="btn btn-success"
                            onClick={ () => {
                                props.addToBasket(phone.name)
                            }}
                        >
                            Add
                        </a>
                    </div>
                
                    <a 
                        href={`#${phone.id}`}
                        onClick = { () => {
                            props.onPhoneSelected(phone.id)
                        }}
                    >
                        {phone.name}
                    </a>
                    <p>
                        {phone.snippet}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default Catalog;
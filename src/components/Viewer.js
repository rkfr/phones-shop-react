import React from 'react';

const Viewer = props => (
    <div>
        <img className="phone" src={props.phone.images[0]} />
    
        <button
          onClick = {props.onBack}
        >
          Back
        </button>
        <button>Add to basket</button>
    
    
        <h1>{props.phone.name}</h1>
    
        <p>{props.phone.description}</p>
    
        <ul className="phone-thumbs">
        {props.phone.images.map((imageUrl, idx) => (
          <li key={idx}>
            <img src={imageUrl} />
          </li>
        ))}
        </ul>
    </div>
);

export default Viewer;
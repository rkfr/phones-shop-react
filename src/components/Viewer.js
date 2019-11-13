import React from 'react';


export default class Viewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalImage: this.props.phone.images[0],
    };
  }

  changeImageHandler = (src) => {
    this.setState({
      generalImage: src,
    });
  }

  render() {
    return (
      <div>
        <img className="phone" src={this.state.generalImage} />

        <button
          onClick={this.props.onBack}
        >
          Back
        </button>
        <button
          onClick={() => {
            this.props.addToBasket(this.props.phone.name);
          }}
        >
Add to basket
        </button>


        <h1>{this.props.phone.name}</h1>

        <p>{this.props.phone.description}</p>

        <ul className="phone-thumbs">
          {this.props.phone.images.map((imageUrl, idx) => (
            <li key={idx}>
              <img
                src={imageUrl}
                onClick={() => { this.changeImageHandler(imageUrl); }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

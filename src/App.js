import React, {Component} from 'react';
import './App.css';
import { getAll, getById } from './api/phone';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: getAll(),
    };
  }

  render() {
    console.log(this.state.phones);
    

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
  
            <div className="col-md-2">
              <section>
                <p>
                  <input />
                </p>
      
                <p>
                  <select>
                    <option value="name">Alphabetical</option>
                    <option value="age">Newest</option>
                  </select>
                </p>
              </section>
      
              <section>
                <p>Shopping Cart</p>
                <ul>
                  <li>Phone 1</li>
                  <li>Phone 2</li>
                  <li>Phone 3</li>
                </ul>
              </section>
            </div>
  
            <div className="col-md-10">
              <ul className="phones">
              {this.state.phones.map(phone => (
                <li className="thumbnail">
                  <a href={`#${phone.is}`} className="thumb">
                    <img 
                      alt={phone.name}
                      src={phone.imageUrl}
                    />
                  </a>
      
                  <div className="phones__btn-buy-wrapper">
                    <a className="btn btn-success">
                      Add
                    </a>
                  </div>
      
                  <a href="#!/phones/motorola-xoom-with-wi-fi">
                    {phone.name}
                  </a>
                  <p>
                    {phone.snippet}
                  </p>
              </li>
              ))}
              </ul>
            </div>
      </div>
        </div>
      </div>
    );
  }
} 

export default App;

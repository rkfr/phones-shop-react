import React, {Component} from 'react';
import './App.css';
import { getAll, getById } from './api/phone';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div classNameName="App">
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
              <li className="thumbnail">
                  <a href="#!/phones/motorola-xoom-with-wi-fi" className="thumb">
                    <img 
                      alt="Motorola XOOM™ with Wi-Fi" 
                      src="img/phones/motorola-xoom-with-wi-fi.0.jpg" />
                  </a>
      
                  <div className="phones__btn-buy-wrapper">
                    <a className="btn btn-success">
                      Add
                    </a>
                  </div>
      
                  <a href="#!/phones/motorola-xoom-with-wi-fi">
                    Motorola XOOM™ with Wi-Fi
                    </a>
                  <p>
                    The Next, Next Generation
                    Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).
                  </p>
                </li>
              </ul>
            </div>
      </div>
        </div>
      </div>
    );
  }
} 

export default App;

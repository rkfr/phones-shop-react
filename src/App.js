import React, {Component} from 'react';
import './App.css';
import { getAll, getById } from './api/phone';
import Basket from './components/Basket';
import Filter from './components/Filter';
import Catalog from './components/Catalog';
import Viewer from './components/Viewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: []
    };
  }

  removeFromBasket = idx => {
    const {basketItems: phones} = this.state,
      newPhones = phones.filter((el, i) => i !== idx);

    this.setState({
      basketItems: newPhones
    });
  }

  addToBasket = data => {
    const {basketItems} = this.state,
      isBasketEmpty = (basketItems.length === 0);

    this.setState({
      basketItems: isBasketEmpty ? [data] : [...basketItems, data]
    })
  }

  render() {

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
  
            <div className="col-md-2">
              <Filter />
              <Basket 
                phones = {this.state.basketItems}
                removeItem = {this.removeFromBasket}
              />
            </div>
  
            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer 
                  phone = {this.state.selectedPhone}
                  addToBasket = {this.addToBasket}
                  onBack = {(() => {
                    this.setState({
                      selectedPhone: null
                    })
                  })}
                />
              ) : (
                <Catalog 
                  phones = {this.state.phones} 
                  onPhoneSelected = {phoneId => {
                    this.setState({
                      selectedPhone: getById(phoneId)
                    })
                  }}
                  addToBasket = {this.addToBasket}
                />
              )}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

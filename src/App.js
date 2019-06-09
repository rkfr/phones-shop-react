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
      basketItems: [],
      sortBy: 'name'
    };
  }

  removeFromBasket = id => {
    const {basketItems: phones} = this.state,
      elementToRemove = phones.indexOf(id),
      newPhones = phones.filter((el, i) => elementToRemove !== i);

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

  setSortType = data => this.setState({sortBy: data});

  setSortedCatalog = phones => this.setState({phones});

  onBack = () => this.setState({selectedPhone: null});

  onPhoneSelected = phoneId => {
    this.setState({
      selectedPhone: getById(this.state.phones, phoneId)
    })
  }

  render() {
    
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
  
            <div className="col-md-2">
              <Filter 
                setSortType = {this.setSortType}
              />
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
                  onBack = {this.onBack}
                />
              ) : (
                <Catalog 
                  phones = {this.state.phones} 
                  onPhoneSelected = {this.onPhoneSelected}
                  addToBasket = {this.addToBasket}
                  sortBy = {this.state.sortBy}
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

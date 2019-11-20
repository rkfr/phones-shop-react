import React, { Component } from 'react';
import './App.css';

import { getAll, getById } from './api/phone';
import { SORT_BY_ALPHA } from './constants';

import Basket from './components/Basket/Basket';
import Filter from './components/Filter/Filter';
import Catalog from './components/Catalog/Catalog';
import Viewer from './components/Viewer/Viewer';

class App extends Component {
  state = {
    phones: [],
    selectedPhone: null,
    basketItems: [],
    searchWord: '',
    sortBy: SORT_BY_ALPHA,
    showBasket: false,
  };


  componentDidMount() {
    this.setState({ phones: getAll() });
  }

  removeFromBasket = (id) => {
    const { basketItems: phones } = this.state;
    const elementToRemove = phones.indexOf(id);

    this.setState({
      basketItems: phones.filter((_, i) => elementToRemove !== i),
    });
  }

  addToBasket = (data) => {
    const { basketItems } = this.state;
    const currentBasketItems = JSON.parse(JSON.stringify(basketItems));

    currentBasketItems.push({ amount: 1, ...data });

    this.setState({ basketItems: currentBasketItems });
  }

  setSortType = (sortType) => this.setState({ sortBy: sortType });

  setSortedCatalog = (phones) => this.setState({ phones });

  onBack = () => this.setState({ selectedPhone: null });

  setSearchWord = (searchWord) => this.setState({ searchWord });

  onPhoneSelected = (phoneId) => {
    const { phones } = this.state;

    this.setState({
      selectedPhone: getById(phones, phoneId),
    });
  }

  switchBasketVisibility = () => this.setState(({ showBasket }) => ({ showBasket: !showBasket }));

  updateBasketItemAmount = (id, amount) => {
    const { basketItems } = this.state;

    if (!basketItems.length) return;

    const item = basketItems.find(({ id: itemId }) => itemId === id);

    if (item) {
      const itemWithUpdatedAmount = { ...item, amount };
      const newBasketItems = basketItems.filter(({ id: itemId }) => itemId !== id);
      newBasketItems.push(itemWithUpdatedAmount);

      console.log(basketItems[0].id === newBasketItems[0].id);


      this.setState({ basketItems: newBasketItems });
    }
  }

  render() {
    const {
      basketItems, selectedPhone, phones, sortBy, searchWord, showBasket,
    } = this.state;

    console.log(basketItems);


    return (
      <div className="app">
        <header className="header">
          <div className="header-wrapper">
            <Filter
              sortBy={sortBy}
              setSortType={this.setSortType}
              setSearchWord={this.setSearchWord}
            />
            <Basket
              showBasket={showBasket}
              switchBasketVisibility={this.switchBasketVisibility}
              basketItems={basketItems}
              removeItem={this.removeFromBasket}
              updateBasketItemAmount={this.updateBasketItemAmount}
            />
          </div>
        </header>
        <main className="main container">
          {/* { selectedPhone ? (
              <Viewer
                phone={selectedPhone}
                addToBasket={this.addToBasket}
                onBack={this.onBack}
              />
            ) : (
              <Catalog
                phones={phones}
                onPhoneSelected={this.onPhoneSelected}
                addToBasket={this.addToBasket}
                sortBy={sortBy}
                searchWord={searchWord}
              />
            )} */}
          <Catalog
            phones={phones}
            onPhoneSelected={this.onPhoneSelected}
            addToBasket={this.addToBasket}
            sortBy={sortBy}
            searchWord={searchWord}
          />
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import { getAll, getById } from './api/phone';
import { SORT_BY_ALPHA } from './constants';

import Basket from './components/Basket/Basket';
import Filter from './components/Filter/Filter';
import Catalog from './components/Catalog/Catalog';
// import Viewer from './components/Viewer/Viewer';

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

  removeItemFromBasket = (id) => {
    const { basketItems: oldBasketItems } = this.state;

    this.setState({ basketItems: oldBasketItems.filter((item) => item.id !== id) });
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

  toggleBodyOverflow = () => {
    const { showBasket } = this.state;

    if (!showBasket) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }

  switchBasketVisibility = () => {
    this.setState(({ showBasket }) => ({ showBasket: !showBasket }));
    this.toggleBodyOverflow();
  };

  updateBasketItemAmount = (id, amount) => {
    const { basketItems } = this.state;

    if (!basketItems.length) return;

    const newBasketItems = basketItems.map((basketItem) => {
      if (basketItem.id === id) {
        return {
          ...basketItem,
          amount,
        };
      }

      return basketItem;
    });


    this.setState({ basketItems: newBasketItems });
  }

  render() {
    const {
      basketItems, selectedPhone, phones, sortBy, searchWord, showBasket,
    } = this.state;

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
              removeItemFromBasket={this.removeItemFromBasket}
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

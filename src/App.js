import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Basket from './components/Basket/Basket';
import Filter from './components/Filter/Filter';
import Catalog from './components/Catalog/Catalog';
import Phone from './components/Catalog/Phone/Phone';

import { getAll } from './api/fetchData';
import { SORT_BY_ALPHA } from './constants';

class App extends Component {
  state = {
    phones: [],
    basketItems: [],
    searchWord: '',
    sortBy: SORT_BY_ALPHA,
    showBasket: false,
    currentPage: 1,
    cardsPerPage: 6,
  };


  componentDidMount() {
    getAll()
      .then((data) => {
        this.setState({ phones: data });
        return data;
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
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

  setSearchWord = (searchWord) => this.setState({ searchWord });

  toggleBodyOverflow = () => {
    const { showBasket } = this.state;

    if (!showBasket) {
      document.body.classList.add('body-disabled');
    } else {
      document.body.classList.remove('body-disabled');
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

  updateCurrentPage = (newPage) => this.setState({ currentPage: newPage });

  updateCardsPerPage = (newCardsCount) => this.setState({ cardsPerPage: newCardsCount });

  render() {
    const {
      basketItems, phones, sortBy, searchWord, showBasket, currentPage, cardsPerPage,
    } = this.state;

    return (
      <div className="app">
        <header className="header">
          <div className="header-wrapper">
            <Filter
              sortBy={sortBy}
              setSortType={this.setSortType}
              setSearchWord={this.setSearchWord}
              updateCurrentPage={this.updateCurrentPage}
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
          <Switch>
            <Route path="/:phoneId">
              <Phone />
            </Route>
            <Route path="/">
              <Catalog
                phones={phones}
                onPhoneSelected={this.onPhoneSelected}
                addToBasket={this.addToBasket}
                sortBy={sortBy}
                searchWord={searchWord}
                basketItems={basketItems}
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                updateCurrentPage={this.updateCurrentPage}
                updateCardsPerPage={this.updateCardsPerPage}
              />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

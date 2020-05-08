import React from "react";

import { Switch, Route } from "react-router-dom";

import "./App.css";

import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends React.Component {
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBox
          placeholder="Search food"
          handleChange={this.handleChange}
        />
        <Switch>
          <Route exact path="/" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

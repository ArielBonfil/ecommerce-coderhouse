import { useState, useEffect } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import NavBarContainer from "./components/NavBarContainer/NavBarContainer";
import Category from "./components/Category/Category";
import CartProvider from "./CartContext/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBarContainer />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;

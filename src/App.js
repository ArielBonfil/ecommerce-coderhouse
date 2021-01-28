import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/cart">
          <CartWidget />
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route path="/category/:id">
          <ItemListContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

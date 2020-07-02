import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/Pages/Main/Main";
import Login from "../src/Pages/Login/Login";
import LoginModal from "./Pages/Login/LoginModal";
import SignUp from "../src/Pages/SignUp/SignUp";
import ProductRegister from "../src/Pages/SignUp/productregister";
import Product from "../src/Pages/Product/Product";
import ProductList from "../src/Pages/ProductList/ProductList";
import Cart from "../src/Pages/Cart/Cart";
import ProductListKeyboard from "./Pages/ProductListKeyboard/ProductListKeyboard";
import "./Styles/reset.scss";
import "./Styles/common.scss";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/loginmodal" component={LoginModal} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/productregister" component={ProductRegister} />
          <Route exact path="/productlist/:pid" component={Product} />
          <Route exact path="/productlist" component={ProductList} />
          <Route
            exact
            path="/productlistkeyboard"
            component={ProductListKeyboard}
          />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

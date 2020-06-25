import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from '../src/Pages/Main/Main';
import Login from '../src/Pages/Login/Login';
import SignUp from '../src/Pages/SignUp/SignUp';
import Product from '../src/Pages/Product/Product';
import ProductList from '../src/Pages/ProductList/ProductList';
import './Styles/reset.scss';


class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/productlist" component={ProductList} />
                </Switch>
            </Router>
        );
    }
}

export default Routes

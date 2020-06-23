import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from '../src/Pages/Login/Login';
import Login from '../src/Pages/Main/Main';
import SignUp from '../src/Pages/SignUp/SignUp';
import Product from '../src/Pages/Product/Product';
import ProductList from '../src/Pages/ProductList/ProductList';
import './Styles/reset.scss';
import Header from './Components/Header/Header';


// 경로 호출 :  import ProductList from '../src/Pages/ProductList/ProductList'
// 경로 추가 :  <Route exact path="/" component={} />
class Routes extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/Main" component={Main} />
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

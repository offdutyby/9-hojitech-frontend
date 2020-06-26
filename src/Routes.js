import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from '../src/Pages/Main/Main';
import Login from '../src/Pages/Login/login';
import LoginClick from '../src/Pages/Login/loginclick';
import SignUp from '../src/Pages/SignUp/SignUp';
import ProductRegister from '../src/Pages/SignUp/productregister';
import Product from '../src/Pages/Product/Product';
import ProductList from '../src/Pages/ProductList/ProductList';
import './Styles/reset.scss';


// 경로 호출 :  import ProductList from '../src/Pages/ProductList/ProductList'
// 경로 추가 :  <Route exact path="/" component={} />
class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/loginclick" component={LoginClick} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/productregister" component={ProductRegister} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/productlist" component={ProductList} />
                </Switch>
            </Router>
        );
    }
}

export default Routes

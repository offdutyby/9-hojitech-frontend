import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './cart.scss'



class Cart extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="Cart">
                    <div className="cartWrap">
                        <h2>장바구니</h2>
                        <div className="cartProductWrap">
                            <div className="cartClear"><span>전체삭제</span></div>
                            <div className="cartProduct">
                                <img className="thumbnail" src="https://www.logitech.com/assets/64704/10/m720-triathlon-mouse.png"></img>
                                <div className="cartText">                                
                                    <span className="productName">M720 TRIATHLON<img className="productColor" src="https://assets.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg"/></span>
                                    <span className="productCount">1</span>
                                    <span className="productPrice">10,000</span>
                                </div>
                                <img className="productDelete" src="https://img.icons8.com/material-two-tone/24/000000/multiply.png"/>
                            </div>
                        </div>
                        
                        <div className="orderPriceWrap">
                            <span>결제 예정 금액<span className="TotalProductPrice">10,000</span></span>
                            <button class="purchase">구매하기</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Cart;
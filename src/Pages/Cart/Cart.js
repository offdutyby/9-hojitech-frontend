import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./cart.scss";

class Cart extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="Cart">
          <div className="cartWrap">
            <h2>장바구니</h2>
            <div class="cartProductWrap">
              <div class="cartProduct">
                <img src="https://www.logitech.com/assets/64704/10/m720-triathlon-mouse.png"></img>
                <div class="productBox">
                  <span className="productName">M720 TRIATHLON</span>
                  <img
                    className="productColor"
                    src="https://assets.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg"
                  />
                </div>
                <span className="productPrice">가격</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Cart;

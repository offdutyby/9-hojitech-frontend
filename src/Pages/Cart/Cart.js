import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CartProduct from "./CartProduct";
import {API_URL_HG} from "../../config"
import "./cart.scss";
class Cart extends Component {
  state = {
    productList: [],
    totalPrice: 0,
    checked: [],
  };
  componentDidMount = () => {
    fetch("http://10.58.5.213:8000/cart/orderlist", {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ productList: res.product_info }));
  };
  allRemove = () => {
    this.setState({
      productList: [],
      totalPrice: "0",
      checked: [],
    });
    fetch(`${API_URL_HG}/cart/orderremoval`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        delete:"all"
      }),
    });
  };
  selectCheckbox = (id, price) => {
    const { totalPrice } = this.state;
    const { checked } = this.state;
    if (checked.includes(id)) {
      this.setState({
        totalPrice: totalPrice - price,
        checked: checked.filter((el) => el !== id),
      });
    } else {
      this.setState({
        totalPrice: totalPrice + price,
        checked: checked.concat(id),
      });
    }
  };
  selectRemove = () => {
    const { productList } = this.state;
    const { checked } = this.state;
    const filterddarr = productList.filter((product, index) => {
      return !checked.includes(product.id);

    });
    this.setState({ productList: filterddarr, checked: [], totalPrice: 0 });
    fetch(`${API_URL_HG}/cart/orderremoval`, {
      method: "POST",
      headers: {
        Authorization:
        localStorage.getItem("token"),
      },
      body: JSON.stringify({
        delete:this.state.checked
      }),
    });
  };
  deleteProds = (idx) => {
    const { productList } = this.state;
    const deletedList = productList.splice(idx, 1);
    this.setState({
      productList: deletedList,
    });
  };
  purchaseHandler = () => {
    if(this.state.checked.length===0){
    fetch(`${API_URL_HG}/cart/purchase`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        purchase:"all"
      }),
    });
    this.setState({checked:[]})
    window.location.reload();
  } else if (this.state.checked.length >0){
    fetch(`${API_URL_HG}/cart/purchase`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        purchase:this.state.checked
      }),
    });
  }
  }
  render() {
    console.log(this.state.productList.length !== 0 && this.state.checked);
    return (
      <>
        <Header />
        <div className="Cart">
          <div className="cartWrap">
            <h2>장바구니</h2>
            <div className="cartProductWrap">
              <div
                className="cartClearButton"
                style={
                  this.state.productList.length === 0
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <span onClick={this.allRemove}>전체삭제</span>
                <span onClick={this.selectRemove}>선택삭제 </span>
              </div>
              {this.state.productList.length === 0 ? (
                <div className="cartClear">장바구니가 비었습니다</div>
              ) : (
                this.state.productList.map((product, index) => {
                  return (
                    <CartProduct
                      key={product.id}
                      colorImage={product.color_image}
                      id={product.id}
                      productName={product.name}
                      thumbnailImage={product.thumbnail_image}
                      productPrice={product.price}
                      quantity={product.quantity}
                      deleteProds={this.deleteProds}
                      selectCheckbox={this.selectCheckbox}
                    />
                  );
                })
              )}
            </div>
            <div className="orderPriceWrap">
              <span>
                결제 예정 금액
                <span className="TotalProductPrice">
                  {this.state.totalPrice}
                </span>
              </span>
              <button className="purchase" onClick={this.purchaseHandler}>구매하기</button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Cart;
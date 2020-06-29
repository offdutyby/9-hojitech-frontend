import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CartProduct from "./CartProduct";
import "./cart.scss";

class Cart extends Component {
  state = {
    productList: [],
    totalPrice: "",
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ productList: res.data }));
  };

  allRemoveHandler = () => {
    this.setState({
      productList: [],
      totalPrice: "0",
    });
  };

  deleteProds = (idx) => {
    const list = this.state.productList;
    let total = this.state.totalPrice;
    total = total - Number(this.state.productList[idx].productPrice);
    list.splice(idx, 1);
    this.setState({
      productList: list,
      totalPrice: total,
    });
  };

  totalPrice = () => {
    let total = null;
    for (let i in this.state.productList) {
      total += Number(this.state.productList[i].productPrice);
    }
    this.setState({
      totalPrice: total,
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="Cart">
          <div className="cartWrap">
            <h2>장바구니</h2>
            <div className="cartProductWrap">
              <div className="cartClearButton">
                <span
                  style={
                    this.state.productList.length === 0
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  onClick={this.allRemoveHandler}
                >
                  전체삭제
                </span>
              </div>
              {this.state.productList.length === 0 ? (
                <div className="cartClear">장바구니가 비었습니다</div>
              ) : (
                this.state.productList.map((id, index) => {
                  return (
                    <CartProduct
                      id={index}
                      key={id.id}
                      productName={id.productName}
                      thumbnailImage={id.thumbnailImage}
                      productPrice={id.productPrice}
                      deleteProds={this.deleteProds}
                      totalPrice={this.totalPrice}
                    />
                  );
                })
              )}
            </div>
            <div className="orderPriceWrap">
              <span>
                결제 예정 금액
                <span className="TotalProductPrice">
                  {this.state.totalPrice.toLocaleString()}
                </span>
              </span>
              <button className="purchase">구매하기</button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Cart;

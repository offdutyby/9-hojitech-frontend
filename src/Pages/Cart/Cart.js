import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CartProduct from "./CartProduct";
import "./cart.scss";

class Cart extends Component {
  state = {
    productList: [],
    totalPrice: 0,
    checked: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ productList: res.data[0].product_info }));
  };

  allRemove = () => {
    this.setState({
      productList: [],
      totalPrice: "0",
      checked: [],
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
  };

  deleteProds = (idx) => {
    const { productList } = this.state;
    const deletedList = productList.splice(idx, 1);
    this.setState({
      productList: deletedList,
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
                      //totalPrice={this.totalPrice}
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

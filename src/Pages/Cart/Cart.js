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
      .then((res) => this.setState({ productList: res.data[0] }));
  };

  allRemove = () => {
    this.setState({
      productList: null,
      totalPrice: "0",
    });
  };

  selectCheckbox = (id) => {
    const { productList } = this.state;
    const { checked } = this.state;

    let newArr;
    let selectedProduct;
    let addPrice;

    !checked.includes(id)
      ? (addPrice =
          this.state.totalPrice + Number(productList[id - 1].productPrice))
      : (addPrice =
          this.state.totalPrice - Number(productList[id - 1].productPrice));

    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id === id) selectedProduct = productList[i];
    }

    if (checked.includes(id)) {
      newArr = checked.filter((el) => el !== id);
    } else {
      newArr = checked.concat(id);
    }

    this.setState({
      totalPrice: addPrice,
      checked: newArr,
    });
  };

  selectRemove = () => {
    const { productList } = this.state;
    const { checked } = this.state;

    const filterddarr = productList.filter((product, index) => {
      return !checked.includes(product.id);
    });
    this.setState({ productList: filterddarr, checked: [] });
  };

  deleteProds = (idx) => {
    const { productList } = this.state;
    //let { totalPrice } = this.state;
    // totalPrice = totalPrice - Number(this.state.productList[idx].productPrice);
    productList.splice(idx, 1);
    this.setState({
      productList: productList,

      //totalPrice: totalPrice,
    });
  };

  // totalPrice = () => {
  //   let total = null;
  //   for (let i in this.state.productList) {
  //     total += Number(this.state.productList[i].productPrice);
  //   }
  //   this.setState({
  //     totalPrice: total,
  //   });
  // };

  render() {
    console.log(this.state.productList);
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
                  this.state.productList === 0
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <span onClick={this.allRemove}>전체삭제</span>
                <span onClick={this.selectRemove}>선택삭제 </span>
              </div>
              {this.state.productList === 0 ? (
                <div className="cartClear">장바구니가 비었습니다</div>
              ) : (
                this.state.productList.map((product, index) => {
                  return (
                    <CartProduct
                      id={product.id}
                      key={product.id}
                      productName={product.productName}
                      thumbnailImage={product.thumbnailImage}
                      productPrice={product.productPrice}
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

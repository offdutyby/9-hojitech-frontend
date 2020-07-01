import React, { Component } from "react";

class CartProduct extends Component {
  clickCheckbox = () => {
    this.props.selectCheckbox(this.props.id);
  };

  deleteIndex = () => {
    this.props.deleteProds(this.props.id);
  };

  //sumAllPrice = (() => this.props.totalPrice(this.props.productPrice))();

  render() {
    return (
      <div className="CartProduct">
        <input
          type="checkbox"
          className="cartCheckbox"
          onClick={this.clickCheckbox}
        />
        <img className="thumbnail" src={this.props.thumbnailImage} alt="" />
        <div className="cartText">
          <span className="productName">
            {this.props.productName}
            <img
              className="productColor"
              src="https://assets.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg"
              alt=""
            />
          </span>
          <span className="productCount">{this.props.id}</span>
          <span className="productPrice"> {this.props.productPricehgu}</span>
        </div>
        <img
          className="productDelete"
          onClick={this.deleteIndex}
          src="https://img.icons8.com/material-two-tone/24/000000/multiply.png"
          alt=""
        />
      </div>
    );
  }
}

export default CartProduct;

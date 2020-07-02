import React, { Component } from "react";

class CartProduct extends Component {
  deleteIndex = () => {
    this.props.deleteProds(this.props.id);
  };

  render() {
    const { selectCheckbox, id, productPrice } = this.props;
    return (
      <div className="CartProduct">
        <input
          type="checkbox"
          className="cartCheckbox"
          onClick={() => selectCheckbox(id, productPrice)}
        />
        <img className="thumbnail" src={this.props.thumbnailImage} alt="" />
        <div className="cartText">
          <span className="productName">
            {this.props.productName}
            <img className="productColor" src={this.props.colorImage} alt="" />
          </span>
          <span className="productCount">{this.props.quantity}</span>
          <span className="productPrice">
            {this.props.productPrice.toLocaleString()}
          </span>
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

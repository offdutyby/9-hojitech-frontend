import React, { Component } from "react";



class CartProduct extends Component {
  state ={
    arr: [],
    allprice:''
  }


    deleteIndex = () => {
      this.props.deleteProd(this.props.id);
    }

    sumAllPrice = (() => this.props.totalPrice(this.props.productPrice))()


  render() {
    return (
        <div className="CartProduct">
          {/* <input type="checkbox" className="cartCheckbox"></input> */}
          <img
            className="thumbnail"
            src={this.props.thumbnailImage}
          ></img>
          <div className="cartText">
            <span className="productName">
              {this.props.productName}
              <img
                className="productColor"
                src="https://assets.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg"
              />
            </span>
    <span className="productCount">{this.props.id}</span>
    <span className="productPrice" /* onClick={this.sumAllPrice} */> {this.props.productPrice.toLocaleString()}</span>
   

          </div>
          <img
            className="productDelete"
            onClick={this.deleteIndex}
            src="https://img.icons8.com/material-two-tone/24/000000/multiply.png"
          />
        </div>

    );
  }
}

export default CartProduct;

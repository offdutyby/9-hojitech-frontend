import React, { Component } from "react";



class CartProduct extends Component {
  state={
    delete:'',
  }

    child = ()=> {
      this.setState({
        delete:this.props.key,
      });
      this.props.deleteProd(this.props.key);
      
    }

  render() {
    return (

        <div className="cartProduct">
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
    <span className="productCount">수량수정</span>
            <span className="productPrice">{this.props.productPrice.toLocaleString()}</span>
          </div>
          <img
            className="productDelete"
            onClick={this.child}
            src="https://img.icons8.com/material-two-tone/24/000000/multiply.png"
          />
        </div>

    );
  }
}

export default CartProduct;

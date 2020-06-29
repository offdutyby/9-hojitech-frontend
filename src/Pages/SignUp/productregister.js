import React, { Component } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import "./productregister.scss";

class ProductRegister extends Component { 
  render() {
    return (
      <>
        <Header />
          <div className = "ProductRegister">
            <img src= "https://theme.zdassets.com/theme_assets/9049502/bd24d19eb305cc0a7b89b57e340deaa901ee2709.png"></img>
            <h1> Logitech 고객 지원에 오신 것을 환영합니다 </h1>
            <h2>제품 등록</h2>
            <h3>제품 범주를 선택하여 제품을 찾으십시오.</h3>
            <p className= "select">제품 범주 선택</p> 
            <input className = "productscope" type="text"/>
            <button className="button" type= "submit">제출</button><br></br>
            <p className= "select">제품 선택</p> 
            <input className="productname" type="text"/>
          </div>
        <Footer />   
      </>
    )
  }
}

export default ProductRegister

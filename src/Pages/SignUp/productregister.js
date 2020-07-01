import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./productregister.scss";

const options = [
  'one', 'two', 'three'
];

//const options2 = [
 // 'check-one', 'check-two', 'check-three'
//];

const defaultOption = options[0];
//const defaultOption2 = options2[0];
class ProductRegister extends Component { 
  constructor() {
    super();
    this.state = {
      productgroup: "",
      productname: ""
    };
  }

  /*handleButton = () => {
    fetch("http://10.58.5.139:8000/account/sign-in", {
      method: "POST",
      // headers: {
      //   Authorization: localStorage.getItem("access_token")
      //},
      body:JSON.stringify({
        email: this.state.id,
        password: this.state.pw
      })
    })
      .then(res => {
        console.log("first then response >>> ", res)
          return res;
      }
      .then(response => response.json())
      .then(response => {
        console.log("second then response >>> ", response)
        })
  };*/

  render() {
    return (
      <>
        <Header />
          <div className = "ProductRegister">
            <img src= "https://theme.zdassets.com/theme_assets/9049502/bd24d19eb305cc0a7b89b57e340deaa901ee2709.png"></img>
            <h1> Logitech 고객 지원에 오신 것을 환영합니다 </h1>
            <h2>제품 등록</h2>
            <h3>제품 범주를 선택하여 제품을 찾으십시오.</h3>
            <p className= "select1">제품 범주 선택</p>
            <div className= "subcontainer">
              <div className= "dropdown1"><br></br>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
              </div>
              <button className="button" type= "submit">제출</button>
            </div><br></br>
              <p className= "select2">제품 선택</p> 
              <div className= "dropdown2">
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            </div>
          </div>
        <Footer />   
      </>
    )
  }
}

export default ProductRegister

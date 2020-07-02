import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "./productregister.scss";

class ProductRegister extends Component { 
  constructor() {
    super();
    this.state = {
      originalProducts: [],
      filteredProducts: [],
      productname: " "
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/dataRegister.json", {
      headers: {
        Authorization: localStorage.getItem('token')
        },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({originalProducts: res.data})
    })
  }

  HandleFilter = (e) => {
    const option = e.target.value
    let filterList = [];

    if (option === "keyboard") {
      filterList = this.state.originalProducts.filter(element => {
        return element.cate_name === "키보드"
      })
    } else if (option === "mouse") {
      filterList = this.state.originalProducts.filter(element => {
        return element.cate_name === "마우스"
      })
    }
  
    this.setState({
      filteredProducts: filterList
    })
  }

    handleDropDown2 = (e) => {
      this.setState({ productname: e.target.value });
    }

    handleButton = () => {
      fetch("http://10.58.1.54:8000/account/register", {
        method: "POST",
        body: JSON.stringify({
          model_name: this.state.productname
        })
      })
    };

  render() {

    return (
      <>
        <Header />
          <div className = "ProductRegister">
            <img src="https://theme.zdassets.com/theme_assets/9049502/bd24d19eb305cc0a7b89b57e340deaa901ee2709.png"></img>
            <h1> Logitech 고객 지원에 오신 것을 환영합니다 </h1>
            <h2>제품 등록</h2>
            <h3>제품 범주를 선택하여 제품을 찾으십시오.</h3>
            <p className= "select1">제품 범주 선택</p>
            <div className= "subcontainer">
              <select className= "dropdown1" name="product" id="product" onChange= {this.HandleFilter}>
                <option value="------">------</option>
                <option value="keyboard">키보드</option>
                <option value="mouse">마우스</option>
                </select>
              <button className="button" onClick= {this.handleButton} type= "submit">제출</button>
            </div>
            <p className= "select2">제품 선택</p> <br></br>
            <select className="dropdown2" name="product" id="product" onChange={this.handleDropDown2}>
              <option value="------">------</option>
              {this.state.filteredProducts.map((element, index) => {
                return <option key={index} value={element.models}>{element.models}</option>
              })}
            </select>
          </div>
        <Footer />   
      </>
    )
  }
}

export default ProductRegister

import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CartProduct from './CartProduct'
import './cart.scss'


class Cart extends Component {
    state = {
        productList:[],
        test:''
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/data/data.json')
        .then(res => res.json())
        .then(res => this.setState({productList:res.data}))

    }

    allRemoveHandler = () => {
        this.setState({
            productList:[],
        })

    }

    deleteProd = (idx) => {
      let {productList} = this.state
      console.log(idx,"<idx")
  
      productList.splice(idx-1,1)
        console.log(idx)
        this.setState({
          productList:productList,
        })
        console.log(this.state.productList)
      }

    render() {

        return (
            <>
                <Header />
                <div className="Cart">
                    <div className="cartWrap">
                        <h2>장바구니</h2>
                        <div className="cartProductWrap">
                            <div className="cartClearButton"><span onClick={this.allRemoveHandler}>전체삭제</span></div>
                            {this.state.productList.length === 0 ? 
                                <div className="cartClear">장바구니가 비었습니다</div> :
                                this.state.productList.map((id,index)=>{
                                return <CartProduct key={id.index} productName={id.productName} thumbnailImage={id.thumbnailImage} productPrice={id.productPrice} deleteProd={this.deleteProd}/>
                            })}
                            {}
                        </div>
                        <div className="orderPriceWrap">
                            <span>결제 예정 금액<span className="TotalProductPrice">10000</span></span>
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
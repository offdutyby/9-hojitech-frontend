import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './product.scss'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="Product">
        <Header />
        <section>
          <header>
            <div className="headerContainer">
              <div className="headerInfoContainer">
                <div className="productImgContainer">
                  <img className="productImg" src="https://assets.logitech.com/assets/65123/wireless-mouse-m590-multi-device-silent.png"/>
                </div>
                <div className="productInfo">
                  <div className="productInfoName">
                    <p className="name">M590 MULTI-DEVICE SILENT</p>
                    <p className="description">파워 유저를 위한 무소음 무선 마우스</p>
                  </div>
                  <div className="productInfoColor">
                    <p className="colorName">
                      그라파이트 토날
                    </p>
                    <div className="colorImgContainer">
                      <img className="colorImg" src="https://assets.logitech.com/assets/65123/24/wireless-mouse-m590-multi-device-silent.jpg" alt=""></img>
                      <img className="colorImg" src="https://assets.logitech.com/assets/65123/25/wireless-mouse-m590-multi-device-silent.jpg" alt=""></img>
                      <img className="colorImg" src="https://assets.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="specPrice">
                    <img className="plusImg" src="https://icons.iconarchive.com/icons/icons8/ios7/256/User-Interface-Plus-icon.png" />
                    <span className="spec">사양</span>
                    <span className="price">₩ 10.000</span>
                  </div>
                  <div className="quantityContainer">
                    <input className="quantity"  type="number" min="1" max="100" />
                  </div>
                  <div className="btnContainer">
                    <div className="buyBtn">
                      구매하기
                    </div>
                    <div className="cartBtn">
                      <img className="cartImg" src="https://www.brandeps.com/icon-download/C/Cart-icon-vector-01.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="imgCollection">
                <li><img className="img" src="https://assets.logitech.com/assets/65123/wireless-mouse-m590-multi-device-silent.png" alt="" /></li>
                <li><img className="img" src="" /></li>
                <li><img className="img" src="" /></li>
                <li><img className="img" src="" /></li>
              </ul>
            </div>
          </header>
          <article>
          </article>
          <footer>
          </footer>
        </section>  
        <Footer />
      </div>
    )
  }
}

export default Product


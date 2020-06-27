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
                    <img className="colorImg" src="https://assets.logitech.com/assets/65123/24/wireless-mouse-m590-multi-device-silent.jpg" alt=""></img>
                    <img className="colorImg" src="https://assets.logitech.com/assets/65123/24/wireless-mouse-m590-multi-device-silent.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="specPrice">
                    <img className="plusImg" src="https://lh3.googleusercontent.com/proxy/LN7Af6u9o6ZlQC88GR-kg6PJpdYdihv4ytpaU09QnlD1TZj5CI1afoG9Nitx7IHHWo5R89JLrkvvi0xkOwAx" />
                    <span>사양</span>
                  </div>
                  <div className="btnContainer">
                    <div className="buyBtn">
                    </div>
                    <div className="cartBtn">
                    </div>
                  </div>
                </div>
              </div>
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


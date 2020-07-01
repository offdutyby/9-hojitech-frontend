import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CartImg from "../../Images/icons8-shopping-cart-32.png";
import "./product.scss";
import "./ProductBody.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlBody: [],
    };
  }

  componentDidMount() {
    fetch(`http://10.58.5.139:8000/product/productdetail/${1}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          htmlBody: res,
        })
      );
  }
  // [this.state.htmlBody[0].product_name]

  render() {
    const {
      Description,
      Teaser,
      recommend_product_description,
      recommend_product_name,
      recommend_product_thumbnail,
      specification,
    } = this.state.htmlBody;

    const htmlCode = this.state.htmlBody && Description;
    const teaser = this.state.htmlBody && Teaser;
    const recommendDescription =
      this.state.htmlBody && recommend_product_description;
    const recommendName = this.state.htmlBody && recommend_product_name;
    const recommendThumbnail =
      this.state.htmlBody && recommend_product_thumbnail;
    const spec = this.state.htmlBody && specification;
    console.log("hello", this.state);
    return (
      <div className="Product">
        <Header />
        <section>
          <header>
            <div className="headerContainer">
              <div className="headerInfoContainer">
                <div className="productImgContainer">
                  <img
                    className="productImg"
                    src="https://assets.logitech.com/assets/65123/wireless-mouse-m590-multi-device-silent.png"
                    alt=""
                  />
                </div>
                <div className="productInfo">
                  <div className="productInfoName">
                    <p className="name">{this.state.htmlBody.product_name}</p>
                    <p className="description">
                      {this.state.htmlBody.product_description}
                    </p>
                  </div>
                  <div className="productInfoColor">
                    <p className="colorName">
                      {this.state.htmlBody.color && this.state.htmlBody.color}
                    </p>
                    <div className="colorImgContainer">
                      <img
                        className="colorImg"
                        src="https://assets.logitech.com/assets/65123/24/wireless-mouse-m590-multi-device-silent.jpg"
                        alt=""
                      ></img>
                      <img
                        className="colorImg"
                        src="https://assets.logitech.com/assets/65123/25/wireless-mouse-m590-multi-device-silent.jpg"
                        alt=""
                      ></img>
                      <img
                        className="colorImg"
                        src="https://assets.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="specPrice">
                    <img
                      className="plusImg"
                      src="https://icons.iconarchive.com/icons/icons8/ios7/256/User-Interface-Plus-icon.png"
                      alt=""
                    />
                    <span className="spec">사양</span>
                    <span className="price">₩ 10.000</span>
                  </div>
                  <div className="btnContainer">
                    <div className="buyBtn">구매하기</div>
                    <div className="cartBtn">
                      <img className="cartImg" src={CartImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="imgCollection">
                <li>
                  <img
                    className="img"
                    src="https://assets.logitech.com/assets/65123/wireless-mouse-m590-multi-device-silent.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src="https://assets.logitech.com/assets/65123/2/wireless-mouse-m590-multi-device-silent.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src="https://assets.logitech.com/assets/65123/3/wireless-mouse-m590-multi-device-silent.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src="https://assets.logitech.com/assets/65123/4/wireless-mouse-m590-multi-device-silent.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </header>
          <article>
            <div dangerouslySetInnerHTML={{ __html: teaser }}></div>
            <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
            <div
              dangerouslySetInnerHTML={{ __html: recommendDescription }}
            ></div>
            <div dangerouslySetInnerHTML={{ __html: recommendName }}></div>
            <div dangerouslySetInnerHTML={{ __html: recommendThumbnail }}></div>
            <div dangerouslySetInnerHTML={{ __html: spec }}></div>
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Product;

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
      clickHandlerId: "",
      colorId: 0,
      colorIdNum: 0,
    };
  }

  componentDidMount() {
    // const id = this.props.match.params.split("/");
    // console.log(id);

    fetch(`http://10.58.5.139:8000/product/productdetail/${1}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          htmlBody: res,
        })
      );
  }
  // [this.state.htmlBody[0].product_name]

  clickHandler(num) {
    this.setState({ colorIdNum: num });
    if (num === 0) {
      this.setState({ colorId: 0 });
    } else if (num === 1) {
      this.setState({ colorId: 0 });
    } else if (num === 2) {
      this.setState({ colorId: 0 });
    }
  }

  render() {
    const { Description, Teaser, specification } = this.state.htmlBody;

    const htmlCode = this.state.htmlBody && Description;
    const teaser = this.state.htmlBody && Teaser;
    const spec = this.state.htmlBody && specification;
    console.log(
      "hello",
      this.state.htmlBody.length !== 0 ? this.state.htmlBody : "ddd"
    );
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
                    src={
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
                        `color${this.state.colorIdNum + 1}`
                      ][this.state.colorId]
                    }
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
                      {this.state.htmlBody.length !== 0 &&
                        this.state.htmlBody.color[this.state.colorIdNum]}
                    </p>
                    <div className="colorImgContainer">
                      <img
                        onClick={() => this.clickHandler(0)}
                        className="colorImg"
                        src="https://assets.logitech.com/assets/65123/24/wireless-mouse-m590-multi-device-silent.jpg"
                        alt=""
                      />
                      <img
                        onClick={() => this.clickHandler(1)}
                        className="colorImg"
                        src="https://assets.logitech.com/assets/65123/25/wireless-mouse-m590-multi-device-silent.jpg"
                        alt=""
                      />
                      <img
                        onClick={() => this.clickHandler(2)}
                        className="colorImg"
                        src="https://assets.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="specPrice">
                    <img
                      className="plusImg"
                      src="https://icons.iconarchive.com/icons/icons8/ios7/256/User-Interface-Plus-icon.png"
                      alt=""
                    />
                    <span className="spec">사양</span>
                    <span className="price">₩ {this.state.htmlBody.price}</span>
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
                    src={
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
                        `color${this.state.colorIdNum + 1}`
                      ][this.state.colorId]
                    }
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src={
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
                        `color${this.state.colorIdNum + 1}`
                      ][this.state.colorId + 1]
                    }
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src={
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
                        `color${this.state.colorIdNum + 1}`
                      ][this.state.colorId + 2]
                    }
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="img"
                    src={
                      this.state.htmlBody.length !== 0 &&
                      this.state.htmlBody.product_images[
                        `color${this.state.colorIdNum + 1}`
                      ][this.state.colorId + 3]
                    }
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </header>
          <article>
            <div dangerouslySetInnerHTML={{ __html: teaser }}></div>
            <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
            <div dangerouslySetInnerHTML={{ __html: spec }}></div>
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Product;

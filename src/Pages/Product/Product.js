import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CartImg from "../../Images/icons8-shopping-cart-32.png";
import { API_URL_HG } from "../../config";
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
    const id = this.props.match.params.pid;

    fetch(`${API_URL_HG}/product/productdetail/${id}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          htmlBody: res,
        })
      );
  }

  clickHandler(num) {
    this.setState({ colorIdNum: num });
  }

  cartHandler = () => {
    fetch(`${API_URL_HG}/cart/order`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.aSotmF-u-BxCD-U_jbFTRpZf6P-AHDKRhBynD-21DvA",
      },
      body: JSON.stringify({
        product_id: this.state.htmlBody.product_id,
        color: this.state.htmlBody.color[this.state.colorIdNum],
        quantity: 1,
      }),
    });
  };

  render() {
    const { Description, Teaser, specification } = this.state.htmlBody;

    const htmlCode = this.state.htmlBody.length !== 0 && Description;
    const teaser = this.state.htmlBody.length !== 0 && Teaser;
    const spec = this.state.htmlBody.length !== 0 && specification;

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
                      <span>
                        <img
                          onClick={() => this.clickHandler(0)}
                          className="colorImg"
                          src={
                            this.state.htmlBody.length !== 0 &&
                            this.state.htmlBody.color_image[0]
                          }
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          onClick={() => this.clickHandler(1)}
                          className="colorImg"
                          src={
                            this.state.htmlBody.length !== 0 &&
                            this.state.htmlBody.color_image[1]
                          }
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          onClick={() => this.clickHandler(2)}
                          className="colorImg"
                          src={
                            this.state.htmlBody.length !== 0 &&
                            this.state.htmlBody.color_image[2]
                          }
                          alt=""
                        />
                      </span>
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
                    <div className="cartBtn" onClick={this.cartHandler}>
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

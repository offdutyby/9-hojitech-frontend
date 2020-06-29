import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../ProductList/hello.scss";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realData: [],
      collectionIcon: "https://www.logitech.com/images/icons/icon-collapse.svg",
      filterVisible: false,
    };
  }

  collectionHandler = () => {
    const { visible } = this.state;

    const collapseIcon =
      "https://www.logitech.com/images/icons/icon-collapse.svg";
    const expandIcon = "https://www.logitech.com/images/icons/icon-expand.svg";

    this.setState({
      collapseIcon: visible ? collapseIcon : expandIcon,
      visible: !visible,
    });
  };

  clickHideHandler = () => {
    const { filterVisible } = this.state;

    this.setState({
      filterVisible: !filterVisible,
    });
  };

  componentDidMount() {
    fetch("http://10.58.0.179:8000/product/mice")
      .then((res) => res.json()) 
      .then((res) => this.setState({ realData: res.data }));
  }

  render() {
    const { visible, filterVisible, collectionIcon } = this.state;

    return (
      <>
        <Header />
        <div className="ProductList">
          <div className="navContainer">
            <div className="navTextContainer">
              <div className="mouseProductName">
                <a className="mouseKeyboardLink" href="/">
                  마우스+키보드
                </a>
                /마우스
              </div>
              <div className="mouseText">마우스</div>
              <div className="logitechMouse">로지텍 마우스</div>
            </div>
            <img
              className="navMouseImg"
              src="https://www.logitech.com/assets/64464/mice.png"
              alt=""
            />
          </div>
          <div className="mainArticle">
            <div className="filterHideContainer">
              <div className="filterHide">
                <img
                  className="filterIcon"
                  src="https://www.logitech.com/images/icons/filter-toggle.svg"
                  alt=""
                />
                <span
                  className="filterHideText"
                  onClick={this.clickHideHandler}
                >
                  필터 숨기기
                </span>
              </div>
            </div>
            <div className="productListMainContainer">
              <div
                className={`filterSidebar ${
                  filterVisible ? "hideFilter" : "showFilter"
                }`}
              >
                <div className="collectionContainer">
                  <div className="collection" onClick={this.collectionHandler}>
                    <span className="collectionName">컬렉션</span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul className={`collectionList ${visible ? "show" : "hide"}`}>
                    <li>MX 퍼포먼스</li>
                    <li>인체공학 제품군</li>
                    <li>멀티 디바이스</li>
                    <li>무선</li>
                    <li>비즈니스용</li>
                    <li>게이밍 마우스</li>
                  </ul>
                </div>
              </div>
              <div className="cardList">
                <div className="content">
                  {this.state.realData[1] &&
                    this.state.realData.map((el, idx) => (
                      <Card
                        key={idx}
                        imgSrc={el.thumbnail_image}
                        name={el.product_name}
                        hoverColor={el.thumbnail_color}
                        thumbnailDescription={el.description}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductList;
import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../ProductListKeyboard/ProductListKeyboard.scss";

class ProductListKeyboard extends Component {
  constructor() {
    super();
    this.state = {
      realData: [],
      collectionIcon: "https://www.logitech.com/images/icons/icon-expand.svg",
      filterVisible: false,
      id: null,
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.151:8000/product/test/")
      .then((res) => res.json())
      .then((res) => this.setState({ realData: res.data }));
  }

  clickSumbitHandler = (num) => {
    this.handleData(num);
  };

  handleData = (num) => {
    fetch(`http://10.58.5.151:8000/product/test/?filter=${num}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          realData: res.data,
        })
      );
  };

  collectionHandler = (num) => {
    const { id } = this.state;

    const collapseIcon =
      "https://www.logitech.com/images/icons/icon-collapse.svg";
    const expandIcon = "https://www.logitech.com/images/icons/icon-expand.svg";

    this.setState({
      collectionIcon: num !== id ? collapseIcon : expandIcon,
      id: num !== id ? num : null,
    });
  };

  clickHideHandler = () => {
    const { filterVisible } = this.state;
    this.setState({
      filterVisible: !filterVisible,
    });
  };

  clickHandler = (id) => {
    this.props.history.push(`/productlist/${id}`);
  };

  render() {
    const { filterVisible, collectionIcon, id } = this.state;
    return (
      <>
        <Header />

        <div className="ProductList">
          <div className="navContainer">
            <div className="navTextContainer">
              <div className="mouseProductName">
                <span className="mouseKeyboardLink">마우스+키보드</span>
                /키보드
              </div>
              <div className="mouseText">키보드</div>
              <div className="logitechMouse">로지텍 키보드</div>
            </div>
            <img
              className="navKeyboardImg"
              src="https://assets.logitech.com/assets/65781/205/mx-keys.png"
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
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(1)}
                  >
                    <span className="collectionName" name="filterCollection">
                      컬렉션
                    </span>
                    <img
                      className="minusImg"
                      alt=""
                      src={
                        id === 1
                          ? "https://www.logitech.com/images/icons/icon-collapse.svg"
                          : collectionIcon
                      }
                    />
                  </div>
                  <ul
                    className={`collectionList ${
                      id === 1 ? "listShow" : "listHide"
                    }`}
                  >
                    <li onClick={() => this.clickSumbitHandler(36)}>
                      MX 퍼포먼스
                    </li>
                    <li onClick={() => this.clickSumbitHandler(37)}>
                      멀티 디바이스
                    </li>
                    <li onClick={() => this.clickSumbitHandler(38)}>무선</li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(2)}
                  >
                    <span className="collectionName">타이핑 느낌</span>
                    <img
                      className="minusImg"
                      alt=""
                      src={
                        id === 2
                          ? "https://www.logitech.com/images/icons/icon-collapse.svg"
                          : collectionIcon
                      }
                    />
                  </div>
                  <ul
                    className={`collectionList ${
                      id === 2 ? "listShow" : "listHide"
                    }`}
                  >
                    <li onClick={() => this.clickSumbitHandler(39)}>
                      노트북 같은 키
                    </li>
                    <li onClick={() => this.clickSumbitHandler(40)}>
                      디 프로파일 키
                    </li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(3)}
                    name="filterPlatfrom"
                  >
                    <span className="collectionName">키보드 레이아웃 크기</span>
                    <img
                      className="minusImg"
                      alt=""
                      src={
                        id === 3
                          ? "https://www.logitech.com/images/icons/icon-collapse.svg"
                          : collectionIcon
                      }
                    />
                  </div>
                  <ul
                    className={`collectionList ${
                      id === 3 ? "listShow" : "listHide"
                    }`}
                  >
                    <li onClick={() => this.clickSumbitHandler(41)}>
                      풀 사이즈 숫자 키패드
                    </li>
                    <li onClick={() => this.clickSumbitHandler(42)}>
                      컴팩트형 숫자 키패드
                    </li>
                    <li onClick={() => this.clickSumbitHandler(43)}>
                      미니멀한 레이아웃
                    </li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(4)}
                    name="filterConnection"
                  >
                    <span className="collectionName">연결</span>

                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      id === 4 ? "listShow" : "listHide"
                    }`}
                  >
                    <li onClick={() => this.clickSumbitHandler(44)}>
                      Usb 수신기
                    </li>
                    <li onClick={() => this.clickSumbitHandler(45)}>
                      Bluetooth
                    </li>
                    <li onClick={() => this.clickSumbitHandler(46)}>
                      Bluetooth + USB 수신기
                    </li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(5)}
                  >
                    <span className="collectionName" name="filterFunction">
                      플랫폼
                    </span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      id === 5 ? "listShow" : "listHide"
                    }`}
                  >
                    <li onClick={() => this.clickSumbitHandler(47)}>Windows</li>
                    <li onClick={() => this.clickSumbitHandler(48)}>Mac</li>
                    <li onClick={() => this.clickSumbitHandler(49)}>Linux</li>
                    <li onClick={() => this.clickSumbitHandler(50)}>Chrome</li>
                    <li onClick={() => this.clickSumbitHandler(51)}>표면</li>
                    <li onClick={() => this.clickSumbitHandler(52)}>Android</li>
                    <li onClick={() => this.clickSumbitHandler(53)}>IOS</li>
                  </ul>
                </div>

                <div className="filterFooter">
                  로지텍 기술에 대해 자세히 알아보기
                  <img
                    src="https://www.logitech.com/images/icons/icon-chevron-right-black.svg"
                    alt=""
                  />
                </div>
                <div className="filterFooter">
                  로지텍 마우스 디자인에 대해 자세히 알아보기
                  <img
                    src="https://www.logitech.com/images/icons/icon-chevron-right-black.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="cardList">
                <div className="content">
                  {this.state.realData[0] &&
                    this.state.realData.map((el, idx) => (
                      <Card
                        onClick={() => this.clickHandler(el.product_id)}
                        key={idx}
                        imgSrc={el.thumbnail_image}
                        name={el.product_name}
                        hoverColor={el.thumbnail_color}
                        thumbnailDescription={el.description}
                        productColor1={el.colors[0]}
                        productColor2={el.colors[1]}
                        productColor3={el.colors[2]}
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

export default ProductListKeyboard;

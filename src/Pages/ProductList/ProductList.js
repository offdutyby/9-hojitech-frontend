import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../ProductList/hello.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      realData: [],
      collectionIcon: "https://www.logitech.com/images/icons/icon-expand.svg",
      filterVisible: false,
      id: null,
      user: {},
    };
  }

  componentDidMount() {
    fetch("http://10.58.2.233:8000/product/mice")
      .then((res) => res.json())
      .then((res) => this.setState({ realData: res.data }));
  }

  clickSumbitHandler = (num) => {
    this.handleData(num);
  };

  handleData = (num) => {
    fetch(`http://10.58.2.233:8000/product/mice/filter?filter=${num}`)
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
                    <li onClick={() => this.clickSumbitHandler(1)}>
                      MX 퍼포먼스
                    </li>
                    <li onClick={() => this.clickSumbitHandler(2)}>
                      인체공학 제품군
                    </li>
                    <li onClick={() => this.clickSumbitHandler(3)}>
                      멀티 디바이스
                    </li>
                    <li onClick={() => this.clickSumbitHandler(4)}>무선</li>
                    <li onClick={() => this.clickSumbitHandler(5)}>
                      비즈니스용
                    </li>
                    <li onClick={() => this.clickSumbitHandler(6)}>
                      게이밍 마우스
                    </li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(2)}
                  >
                    <span className="collectionName">크기 및 핏</span>
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
                    <li onClick={() => this.clickSumbitHandler(7)}>
                      소형 / 휴대용
                    </li>
                    <li onClick={() => this.clickSumbitHandler(8)}>대형</li>
                    <li onClick={() => this.clickSumbitHandler(9)}>양손잡이</li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(3)}
                    name="filterPlatfrom"
                  >
                    <span className="collectionName">플랫폼</span>
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
                    <li onClick={() => this.clickSumbitHandler(9)}>Windows</li>
                    <li onClick={() => this.clickSumbitHandler(10)}>Mac</li>
                    <li onClick={() => this.clickSumbitHandler(11)}>Chrome</li>
                    <li onClick={() => this.clickSumbitHandler(12)}>표면</li>
                    <li onClick={() => this.clickSumbitHandler(13)}>Linux</li>
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
                    <li onClick={() => this.clickSumbitHandler(14)}>
                      Usb 수신기
                    </li>
                    <li onClick={() => this.clickSumbitHandler(15)}>
                      USB Unifying 수신기
                    </li>
                    <li onClick={() => this.clickSumbitHandler(16)}>
                      Bluetooth
                    </li>
                    <li onClick={() => this.clickSumbitHandler(17)}>
                      Bluetooth + USB 수신기
                    </li>
                    <li onClick={() => this.clickSumbitHandler(18)}>유선</li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(5)}
                  >
                    <span className="collectionName" name="filterFunction">
                      기능
                    </span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      id === 5 ? "listShow" : "listHide"
                    }`}
                  >
                    <li>충전식</li>
                    <li>조용한 클릭</li>
                    <li>이지-스위치 기술</li>
                    <li>플로우 테크놀로지</li>
                    <li>다크필드 트레킹</li>
                    <li>프로그래밍이 가능한 버튼</li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(6)}
                  >
                    <span className="collectionName" name="filterScroll">
                      고급 스크롤 유형
                    </span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      id === 6 ? "listShow" : "listHide"
                    }`}
                  ></ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={() => this.collectionHandler(7)}
                  >
                    <span className="collectionName" name="filterWork">
                      작업 및 용도
                    </span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      id === 7 ? "listShow" : "listHide"
                    }`}
                  ></ul>
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

export default ProductList;

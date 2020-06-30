import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../ProductList/hello.scss";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realData: [
        {
          thumbnail_image:
            "https://www.logitech.com/assets/65776/73/mx-master-3.png",
          product_name: "MX MASTER 3",
          thumbnail_color: "red",
          description: "이제품은 이렇게저렇고저롷ㄱ",
          product_color: [
            "https://www.logitech.com/assets/65123/24/wireless-mouse-m590-multi-device-silent.jpg",
            "https://www.logitech.com/assets/65123/25/wireless-mouse-m590-multi-device-silent.jpg",
            "https://www.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg",
          ],
        },
      ],
      collectionIcon: "https://www.logitech.com/images/icons/icon-collapse.svg",
      filterVisible: false,
      visible: false,
    };
  }

  collectionHandler = (e) => {
    console.log(e.target.name);
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

  // componentDidMount() {
  //   fetch("http://10.58.0.179:8000/product/mice")
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ realData: res.data }));
  // }

  render() {
    const { visible, filterVisible, collectionIcon } = this.state;

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
                  <div className="collection" onClick={this.collectionHandler}>
                    <span className="collectionName" name="filterCollection">
                      컬렉션
                    </span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      visible ? "listShow" : "listHide"
                    }`}
                  >
                    <li>MX 퍼포먼스</li>
                    <li>인체공학 제품군</li>
                    <li>멀티 디바이스</li>
                    <li>무선</li>
                    <li>비즈니스용</li>
                    <li>게이밍 마우스</li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={this.collectionHandler}
                    name="filterSize"
                  >
                    <span className="collectionName">크기 및 핏</span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      visible ? "listShow" : "listHide"
                    }`}
                  >
                    <li>소형 / 휴대용</li>
                    <li>대형</li>
                    <li>양손잡이</li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={this.collectionHandler}
                    name="filterPlatfrom"
                  >
                    <span className="collectionName">플랫폼</span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      visible ? "listShow" : "listHide"
                    }`}
                  >
                    <li>Windows</li>
                    <li>Mac</li>
                    <li>Chrome</li>
                    <li>표면</li>
                    <li>Linux</li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div
                    className="collection"
                    onClick={this.collectionHandler}
                    name="filterConnection"
                  >
                    <span className="collectionName">연결</span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      visible ? "listShow" : "listHide"
                    }`}
                  >
                    <li>Usb 수신기</li>
                    <li>USB Unifying 수신기</li>
                    <li>Bluetooth</li>
                    <li>Bluetooth + USB 수신기</li>
                    <li>유선</li>
                  </ul>
                </div>
                <div className="collectionContainer">
                  <div className="collection" onClick={this.collectionHandler}>
                    <span className="collectionName" name="filterFunction">
                      기능
                    </span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      visible ? "listShow" : "listHide"
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
                  <div className="collection" onClick={this.collectionHandler}>
                    <span className="collectionName" name="filterScroll">
                      고급 스크롤 유형
                    </span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      visible ? "listShow" : "listHide"
                    }`}
                  ></ul>
                </div>
                <div className="collectionContainer">
                  <div className="collection" onClick={this.collectionHandler}>
                    <span className="collectionName" name="filterWork">
                      작업 및 용도
                    </span>
                    <img className="minusImg" alt="" src={collectionIcon} />
                  </div>
                  <ul
                    className={`collectionList ${
                      visible ? "listShow" : "listHide"
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
                        productColor1={el.product_color[0]}
                        productColor2={el.product_color[1]}
                        productColor3={el.product_color[2]}
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

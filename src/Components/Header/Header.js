import React, { Component } from "react";
import HeaderSearch from "./HeaderSearch";
import LogoBk from "../../Images/logo_bk.png";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null,
      headerSearch:false,
      headerSearchPageInput:"",
      headerSearchPageImage:"",
      
    };
  }

  seachInputClick=()=>{
    this.setState({
      headerSearch:true
    })
  }
  
  inputChange=(e)=>{
    this.setState({
      headerSearchPageInput : e.target.value,
    })
    if(this.state.headerSearchPageInput.length!==0){
      this.setState({
      headerSearchPageImage:"https://img.icons8.com/material-rounded/24/000000/multiply--v1.png",
      })
    }else{
      this.setState({
        headerSearchPageImage:"",
        })
    }
  }
  clicks=()=>{
    this.setState({
      headerSearch:false,
      headerSearchPageInput:'',
    })
  }

  hoverHandler = id => {
    if (this.state.activeTab === id) this.setState({ activeTab: null });
    else this.setState({ activeTab: id })
  }
    
  render() {
    return (
      <div className="Header">
        <header>
          <div className="headerTopWrap">
            <div className="haederTop">
              <div className="headerTopLeft">
                <a href="/#">
                  <img
                    src="https://www.logitech.com/content/dam/logitech/common/header/logitechg-bottom.svg"
                    alt="logitechG"
                  ></img>
                </a>
                <a href="/#">
                  <img
                    src="https://www.logitech.com/content/dam/logitech/common/header/jaybird-overlay.svg"
                    alt="jaybirdsoprt"
                  ></img>
                </a>
                <a href="/#">
                  <img
                    src="https://www.logitech.com/content/dam/logitech/common/header/ue-bottom.svg"
                    alt="ultimateears"
                  ></img>
                </a>
              </div>
              <div className="headerTopRight">
                <a href="/#">
                  <img src="https://www.logitech.com/images/flags/south-korea.gif"></img>
                  KO
                </a>
                <a href="/#">내 계정</a>
              </div>
            </div>
          </div>
          <div className="headerMain">
            <div className="headerMainRight">
              <a href="/#">
                <img src={LogoBk} alt="mainlogo"></img>
              </a>
            </div>
            <nav>
              <div className="mainNav" onMouseOver={() => this.hoverHandler(0)} onMouseOut={() => this.hoverHandler(0)}>
                제품
                  <div className={`mainNavWrap ${this.state.activeTab === 0 ? "show" : "hide"}`}>
                    <ul>
                      <li>마우스+키보드</li>
                      <li>마우스</li>
                      <li>콤보</li>
                      <li>키보드</li>
                      <li>iPad 키보드</li>
                      <li>태블릿 키보드</li>
                    </ul>
                    <ul>
                      <li>프레젠테이션 리모컨</li>
                      <li>Spotlight</li>
                      <li>전체 프레젠테이션 리모컨</li>
                    </ul>
                    <ul>
                      <li>모바일 장치</li>
                      <li>iPad 키보드</li>
                      <li>iPad 케이스</li>
                      <li>태블릿 키보드</li>
                      <li>스마트폰 액세서리</li>
                    </ul>
                  </div>
              </div>
                <div className="mainNav" onMouseOver={() => {this.hoverHandler(1)}} onMouseOut={() => {this.hoverHandler(1)}}>
                  솔루션
                <div className={`mainNavWrap ${this.state.activeTab === 1 ? "show" : "hide"}`}>
                <ul>
                  <li>프리미엄 컬렉션</li>
                  <li>코딩용 MX</li>
                  <li>창작용 MX</li>
                  <li>Master 시리즈 제품</li>
                </ul>
                <ul>
                  <li>집에서 근무하기</li>
                  <li>홈 오피스의 필수 사항</li>
                  <li>WFH 리소스</li>
                </ul>
                <ul>
                  <li>교육</li>
                  <li>집에서 학습하기</li>
                </ul>
              </div>
              </div>
              
              <div className="mainNav" onMouseOver={() => {this.hoverHandler(2)}} onMouseOut={() => {this.hoverHandler(2)}}>
                  비즈니스
              <div className={`mainNavWrap ${this.state.activeTab === 2 ? "show" : "hide"}`}>
                <ul>
                  <li>비즈니스</li>
                  <li>카메라</li>
                  <li>웹캠</li>
                  <li>헤드셋</li>
                </ul>
                <ul>
                  <li>비디오 협업</li>
                  <li>개요</li>
                  <li>제품 보기</li>
                  <li>리소스</li>
                  <li>파트너</li>
                  <li>구매 문의</li>
                  <li>리셀러 찾기</li>
                </ul>
              </div>
              </div>

                <div className="mainNav" onMouseOver={()=>{this.hoverHandler(3)}} onMouseOut={() => {this.hoverHandler(3)}}>
                  지원
              <div className={`mainNavWrap ${this.state.activeTab === 3 ? "show" : "hide"}`}>
                <ul>
                  <li>고객지원</li>
                  <li>지원 홈</li>
                  <li>제품 등록</li>
                  <li>소프트웨어 다운로드</li>
                </ul>
                <ul>
                  <li>비즈니스 지원</li>
                  <li>협업 지원</li>
                  <li>비디오 협업</li>
                  <li>예비 부품 </li>
                  <li>비디오 협업 다운로드</li>
                  <li>연락처</li>
                  <li>리셀러 찾기</li>
                </ul>
              </div>
              </div>
            </nav>
            <div className="headerMainLeft">
              <input
                className="searchInput"
                type="text"
                placeholder="검색"
                onClick={this.seachInputClick}
                defaultValue="검색"
              ></input>
            </div>
            <div className={`headerSearchPage ${this.state.headerSearch ? "show" : "hide"}`}>
              <input placeholder="검색" onChange={this.inputChange} defaultValue={this.state.headerSearchPageInput}></input>
              <img onClick={this.clicks} src={this.state.headerSearchPageImage}></img>
              <div className="headerSearchResult"></div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import LogoBk from "../../Images/logo_wh.png";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainNavWrapStyle01: {display:'none'},
      mainNavWrapStyle02:{display:'none'},
      mainNavWrapStyle03:{display:'none'},
      mainNavWrapStyle04:{display:'none'},
    };
  }

navMouseEnterHandeler01=(e)=>{
   this.setState(
       {mainNavWrapStyle01:{display:"flex"}
    })
  }
  navMouseLeaveHandeler01=(e)=>{
    this.setState(
        {mainNavWrapStyle01:{display:"none"}
     })
   }
   navMouseEnterHandeler02=(e)=>{
    this.setState(
        {mainNavWrapStyle02:{display:"flex"}
     })
   }
   navMouseLeaveHandeler02=(e)=>{
     this.setState(
         {mainNavWrapStyle02:{display:"none"}
      })
    }
    navMouseEnterHandeler03=(e)=>{
      this.setState(
          {mainNavWrapStyle03:{display:"flex"}
       })
     }
     navMouseLeaveHandeler03=(e)=>{
       this.setState(
           {mainNavWrapStyle03:{display:"none"}
        })
      }
      navMouseEnterHandeler04=(e)=>{
    this.setState(
        {mainNavWrapStyle04:{display:"flex"}
     })
   }
   navMouseLeaveHandeler04=(e)=>{
     this.setState(
         {mainNavWrapStyle04:{display:"none"}
      })
    }
 

  render() {
    console.log(this.state)
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
              <div className="mainNav"onMouseOver={this.navMouseEnterHandeler01} onMouseOut={this.navMouseLeaveHandeler01}>
                제품
                  <div className="mainNavWrap" style={{display:"block"}}>
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
              
              <div className="mainNav">
                <a onMouseEnter={this.navMouseEnterHandeler02}>솔루션</a>
              </div>
              <div className="mainNavWrap" style={this.state.mainNavWrapStyle02} onMouseLeave={this.navMouseLeaveHandeler02}>
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
              <div className="mainNav">
                <a onMouseEnter={this.navMouseEnterHandeler03}>비즈니스</a>
              </div>
              <div className="mainNavWrap" style={this.state.mainNavWrapStyle03} onMouseLeave={this.navMouseLeaveHandeler03}>
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
              <div className="mainNav">
                <a onMouseEnter={this.navMouseEnterHandeler04}>지원</a>
              </div>
              <div className="mainNavWrap" style={this.state.mainNavWrapStyle04} onMouseLeave={this.navMouseLeaveHandeler04}>
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
            </nav>
            <div className="headerMainLeft">
              <input
                className="searchInput"
                type="text"
                placeholder="검색"
              ></input>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

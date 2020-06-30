import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerTop">
          <span>소개</span>
          <span>채용정보</span>
          <span>연락처</span>
          <span>개인정보 취급방침</span>
          <span>사이트맵</span>
          <span>투자자</span>
          <span>이용 약관</span>
          <span>지속 가능성</span>
          <span>보도 자료</span>
          <span>이메일 구독</span>
        </div>
        <div className="footerBottom">
          <div className="footerBottomLeft">
            <a href="https://www.facebook.com/LogitechKR/?brand_redir=273503033533">
              <img
                src="https://www.logitech.com/images/social/fb-icon.png"
                alt="페이스북"
              ></img>
            </a>
            <a href="https://twitter.com/Logitech">
              <img
                src="https://www.logitech.com/images/social/twitter-icon.png"
                alt="트위터"
              ></img>
            </a>
            <a href="http://instagram.com/logitech?ref=badge">
              <img
                src="https://www.logitech.com/images/social/instagram-logo.svg"
                alt="인스타그램"
              ></img>
            </a>
          </div>
          <div className="footerBottomRight">
            <p>뉴스레터 가입</p>
            <div className="newsWrap">
              <input className="newsInput" placeholder="이메일"></input>
              <button className="newsButton">▶</button>
            </div>
          </div>
        </div>
        <div className="footerCopyright">
          <span>
            <img
              src="https://www.logitech.com/images/flags/south-korea.gif"
              alt=""
            ></img>
            대한민국 ▶
          </span>
          <p>© 2020 Logitech. All rights reserved</p>
          <p>
            고객 지원 센터 (제품 및 A/S 문의처): 00798-601-8207 (수신자부담)
            ㅣ사업자 등록번호: 107-86-10308 ㅣ로지텍 코리아 대표이사:
            권성택ㅣ서울특별시 영등포구 여의공원로 101, CCMM 빌딩 402B
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

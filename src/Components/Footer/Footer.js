import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerTop">
          <a href="/#">소개</a>
          <a href="/#">채용정보</a>
          <a href="/#">연락처</a>
          <a href="/#">개인정보 취급방침</a>
          <a href="/#">사이트맵</a>
          <a href="/#">투자자</a>
          <a href="/#">이용 약관</a>
          <a href="/#">지속 가능성</a>
          <a href="/#">보도 자료</a>
          <a href="/#">이메일 구독</a>
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
          <a href="/#">
            <img
              src="https://www.logitech.com/images/flags/south-korea.gif"
              alt=""
            ></img>
            대한민국 ▶
          </a>
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

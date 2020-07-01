import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./MainSlide.scss";

class MainSlide extends Component {
  render() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
      <div class="MainSlide">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3000}
        >
          <div data-src="https://www.logitech.com/assets/65888/combo-touch.jpg">
            <div className="slideTextBox">
              <h3>iPad용 Combo Touch</h3>
              <h2>
                새 아이디어를
                <br />
                클릭만으로
              </h2>
              <span>TOUCH COMBO</span>
            </div>
          </div>
          <div data-src="https://www.logitech.com/assets/65762/30/streamcam.jpg">
            <div className="slideTextBox">
              <h3>열정 공유하기</h3>
              <h2 style={{ fontSize: "78px" }}>
                LOGITECH
                <br />
                STREAMCAM
              </h2>
              <span>STREAMCAM 탐색하기</span>
            </div>
          </div>
          <div data-src="https://www.logitech.com/assets/65906/slim-folio-pro-for-ipad-pro-11-inch-and-129-inch.jpg">
            <div className="slideTextBox">
              <h3>iPad Pro 11인치 및 12.9인치용 Slim Folio Pro</h3>
              <h2>
                노트북과 같은
                <br />
                타이핑 느낌.
                <br />새 PRO 모델 지원.
              </h2>
              <span>SLIM FOLIO PRO 알아보기</span>
            </div>
          </div>
        </AutoplaySlider>
      </div>
    );
  }
}

export default MainSlide;

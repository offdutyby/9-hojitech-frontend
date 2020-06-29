import React, { Component } from "react";
import "./ProductBody.scss";

class ProductBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      htmlBody: [
        {
          Description:
            '<section aria-label="주요 기능" class="product-key-features">\n<div class="container">\n<h6 class="product-key-features-title">주요 기능</h6>\n<ul class="key-features-ctn">\n<li class="key-features-item">\n<div class="key-features-media-ctn pull-left">\n<div class="key-features-media">\n<a class="action image-opens-vidplayer play-video-btn" href="https://assets.logitech.comhttps://www.youtube.com/watch?v=0rs6WMN0uUE" role="button" target="" title="비디오 재생">\n<img alt="M585 with two computer" class="video-poster" src="https://assets.logitech.com/assets/65122/19/wireless-mouse-m585-multi-device.jpg"/>\n<span aria-hidden="true" class="logi-icon-play-circled" role="presentation"></span>\n</a>\n</div>\n</div>\n<div class="key-features-copy-ctn">\n<div class="key-features-copy">\n<h3>Logitech FLOW</h3>\n<p>PC와 Mac처럼 운영체제가 전혀 다른 두 컴퓨터 사이를 자유럽게 이동하고, 텍스트나 파일을 복사/붙여넣기 할 수 있습니다.<a class="footnote">1</a></p>\n<p class="text-link"><a alt="Logitech Flow 더 알아보기" class="logi-icon-chevron-right" href="https://assets.logitech.com/ko-kr/page/flow-multi-device-control" target=""><span>Logitech Flow 더 알아보기</span></a> </p>\n</div>\n</div>\n</li>\n<li class="key-features-item">\n<div class="key-features-media-ctn pull-right">\n<div class="key-features-media">\n<img alt="M585 Multi-Device" class="media-img" src="https://assets.logitech.com/assets/65122/20/wireless-mouse-m585-multi-device.jpg">\n</img></div>\n</div>\n<div class="key-features-copy-ctn">\n<div class="key-features-copy">\n<h3>초정밀 스크롤 휠</h3>\n<p>초정밀 스크롤 휠로 긴 웹페이지도 쉽고 빠르고 부드럽게 스크롤 할 수 있습니다.</p>\n</div>\n</div>\n</li>\n<li class="key-features-item">\n<div class="key-features-media-ctn pull-left">\n<div class="key-features-media">\n<img alt="M585 Multi-Device" class="media-img" src="https://assets.logitech.com/assets/65122/21/wireless-mouse-m585-multi-device.jpg">\n</img></div>\n</div>\n<div class="key-features-copy-ctn">\n<div class="key-features-copy">\n<h3>2개의 엄지손가락 버튼</h3>\n<p>두 개의 엄지손가락 버튼으로 더 쉽고 간단하게 컨트롤 할 수 있습니다. 웹페이지 앞으로/뒤로 가기 뿐만 아니라, Mac OS X 및 Windows<sup>®</sup> 모두 지원하는 Logitech Options<sup>™</sup> 소프트웨어를 다운로드하여 원하는 기능으로 설정할 수 있습니다.</p>\n</div>\n</div>\n</li>\n<li class="key-features-item">\n<div class="key-features-media-ctn pull-right">\n<div class="key-features-media">\n<img alt="M585 Multi-Device 24 Month battery" class="media-img" src="https://assets.logitech.com/assets/65122/22/wireless-mouse-m585-multi-device.jpg">\n</img></div>\n</div>\n<div class="key-features-copy-ctn">\n<div class="key-features-copy">\n<h3>24개월의 배터리 수명</h3>\n<p>효율적인 전력관리로 1개의 AA 건전지로 2년간 사용할 수 있습니다. 자동 절전모드, 전원 온/오프 스위치 및 배터리 표시등으로 배터리 걱정이 없습니다.<a class="footnote">2</a></p>\n</div>\n</div>\n</li>\n<li class="key-features-item">\n<div class="key-features-media-ctn pull-left">\n<div class="key-features-media">\n<img alt="M585 Multi-Device" class="media-img" src="https://assets.logitech.com/assets/65122/23/wireless-mouse-m585-multi-device.jpg">\n</img></div>\n</div>\n<div class="key-features-copy-ctn">\n<div class="key-features-copy">\n<h3>손에 딱 맞는 디자인</h3>\n<p>손에 꼭 맞는 돔 형태의 디자인으로 장시간 사용해도 편안합니다.</p>\n</div>\n</div>\n</li>\n</ul>\n</div>\n</section>',
          Teaser:
            '<section aria-label="Product Teaser" class="product-teaser">\n<div class="container">\n<div class="teaser-copy-ctn">\n<h3 class="teaser-title">혁신적인 멀티태스킹 기능</h3>\n<p class="teaser-overview">M585 Multi-Device로 업무 환경을 혁신적으로 바꿔보세요. FLOW 기능를 사용하면 한 대의 마우스로 두 대의 컴퓨터 사이를 자유롭게 이동하고 한 컴퓨터에서 다른 컴퓨터로 복사/붙여넣기 하는 마법 같은 일이 가능해집니다. 초정밀 스크롤 휠, 5개의 프로그래밍 가능한 버튼, 2년의 배터리 수명, 손에 딱 맞는 편안한 그립감, 뛰어난 옵티컬 트래킹 및 이중 연결(<em>Bluetooth</em><sup>®</sup> 또는 2.4GHz 로지텍 Unifying<sup>™</sup>)로 스마트하게 컨트롤 할 수 있습니다.</p>\n</div>\n</div> <!-- .container -->\n</section>',
          color: ["그라파이트", "회색", "루비"],
          color_image: [
            "https://www.logitech.com/assets/65122/26/wireless-mouse-m585-multi-device.jpg",
            "https://www.logitech.com/assets/65122/24/wireless-mouse-m585-multi-device.jpg",
            "https://www.logitech.com/assets/65123/26/wireless-mouse-m590-multi-device-silent.jpg",
          ],
          price: 32000,
          product_description: "멀티 태스킹 마우스",
          product_images: {
            그라파이트: [
              "https://assets.logitech.com/assets/65122/wireless-mouse-m585-multi-device.png",
              "https://assets.logitech.com/assets/65122/2/wireless-mouse-m585-multi-device.png",
              "https://assets.logitech.com/assets/65122/3/wireless-mouse-m585-multi-device.png",
              "https://assets.logitech.com/assets/65122/4/wireless-mouse-m585-multi-device.png",
            ],
            루비: [
              "https://assets.logitech.com/assets/65123/9/wireless-mouse-m590-multi-device-silent.png",
              "https://assets.logitech.com/assets/65123/10/wireless-mouse-m590-multi-device-silent.png",
              "https://assets.logitech.com/assets/65123/11/wireless-mouse-m590-multi-device-silent.png",
              "https://assets.logitech.com/assets/65123/12/wireless-mouse-m590-multi-device-silent.png",
            ],
            회색: [
              "https://assets.logitech.com/assets/65122/5/wireless-mouse-m585-multi-device.png",
              "https://assets.logitech.com/assets/65122/6/wireless-mouse-m585-multi-device.png",
              "https://assets.logitech.com/assets/65122/7/wireless-mouse-m585-multi-device.png",
              "https://assets.logitech.com/assets/65122/8/wireless-mouse-m585-multi-device.png",
            ],
          },
          product_name: "M585 MULTI-DEVICE",
          product_videos: [],
          specification:
            '<div class="tabs">\n<div class="tabs hidden-xs">\n<!-- Nav tabs -->\n<div class="specs-header">\n<h6>사양 및 세부 정보</h6>\n</div>\n</div>\n<!-- panel content -->\n<div aria-multiselectable="true" class="panel-group" id="spec-accordion" role="tablist">\n<div class="panel panel-default">\n<div class="panel-heading visible-xs" id="heading-one" role="tab">\n<h4 class="panel-title">\n<a aria-controls="collapse-one" aria-expanded="true" data-parent="#spec-accordion" data-toggle="collapse" href="https://assets.logitech.com#collapse-one" role="button">\n\n\t                                사양 및 세부 정보 <span aria-hidden="true" class="more-less glyphicon glyphicon-minus text-right"></span>\n</a>\n</h4>\n</div>\n<div aria-expanded="true" aria-labelledby="collapse-one" class="panel-collapse collapse in" id="collapse-one" role="tabpanel">\n<div class="panel-body tab-pane">\n<ul class="tabs-list" data-col="3">\n<li class="tab-content-item clearfix">\n<h3>규격</h3>\n<div class="feature-content clearfix">\n<!-- content description -->\n<ul>\n<div class="cell-group">\n<ul>\n<li>\n<span class="name">높이 x 너비 x 깊이:</span>\n<span class="value">103 mm x 64 mm x 40 mm</span>\n</li>\n</ul>\n</div>\n<div class="cell-group">\n<ul>\n<li>\n<span class="name">무게:</span>\n<span class="value">101 g</span>\n</li>\n</ul>\n</div>\n<!-- lists -->\n</ul>\n</div>\n<!-- general content -->\n<h3>시스템 요구사항</h3>\n<div class="feature-content clearfix">\n<!-- content description -->\n<!-- lists -->\n<div class="cell-group">\n<ul>\n<p>\n\t\t\t\t\t\t\t\t\t\t\tWindows | Mac | Chrome<sup>®</sup> OS | Linux<sup>®</sup> | iPadOs | Surface™와 호환\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</p>\n<h4>수신기</h4>\n<p>\n\t\t\t\t\t\t\t\t\t\t\t필수: 사용 가능한 USB 포트<br>\nWindows 10 이상, Windows 8, Windows 7<br/>\nmacOS 10.10 이상<br/>\nChrome OS<br/>\nLinux Kernel 2.6+<br/>\n</br></p>\n<h4><em>Bluetooth</em></h4>\n<p>\n\t\t\t\t\t\t\t\t\t\t\t필수: <em>Bluetooth</em> 저에너지 기술<br/>\nWindows 10 이상, Windows 8<br/>\nmacOS 10.10 이상<br/>\nChrome OS<br/>\nAndroid™ 5.0 이상<br/>\nLinux Kernel 2.6+<br/>\niPadOS 13.1 이상<a class="footnote" href="https://assets.logitech.com#footnote3">3</a><br/>\n</p>\n</ul>\n</div>\n<!-- footnote -->\n</div>\n</li>\n<li class="tab-content-item clearfix">\n<!-- general content -->\n<h3>사양</h3>\n<div class="feature-content clearfix">\n<!-- content description -->\n<!-- lists -->\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t연결 유형:\n\t\t\t\t\t\t\t\t\t\t<em>Bluetooth</em> Smart 및 2.4GHz 무선 연결\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t무선 범위:\n\t\t\t\t\t\t\t\t\t\t10m*<br/>\n<span class="disclaimer">*사용 및 컴퓨터 작업 환경에 따라 달라질 수 있습니다.</span>\n</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t표시등 (LED:\n\t\t\t\t\t\t\t\t\t\t배터리와 연결상태 표시등 / 연결채널 LED)\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t전원연결:\n\t\t\t\t\t\t\t\t\t\t전원 온/오프 스위치\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t배터리 세부 정보:\n\t\t\t\t\t\t\t\t\t\tAA 1개\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t배터리 수명:\n\t\t\t\t\t\t\t\t\t\t24개월*<br/>\n<span class="disclaimer">*배터리 수명은 사용자 및 컴퓨터 작업 환경에 따라 다를 수 있습니다.</span>\n</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\tDPI(최소/최대):\n\t\t\t\t\t\t\t\t\t\t1000±\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t센서:\n\t\t\t\t\t\t\t\t\t\t로지텍 고급 옵티컬 센서\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t센서 해상도:\n\t\t\t\t\t\t\t\t\t\t1000dpi\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t휠:\n\t\t\t\t\t\t\t\t\t\t미니 래칫 4D 옵티컬\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t버튼:\n\t\t\t\t\t\t\t\t\t\t휠 클릭을 지원하는 틸트 휠, 이지 스위치 버튼\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t제스처 기능 (Windows):\n\t\t\t\t\t\t\t\t\t\t예\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\t\t\t제스처 기능 (Mac):\n\t\t\t\t\t\t\t\t\t\t예\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</p>\n</div>\n<!-- footnote -->\n</div>\n</li>\n<li class="tab-content-item clearfix">\n<!-- general content -->\n<h3>보증 정보</h3>\n<div class="feature-content clearfix">\n<!-- content description -->\n<p>1년 제한 하드웨어 보증</p>\n<!-- lists -->\n<!-- footnote -->\n</div>\n<!-- general content -->\n<h3>패키지 내용물</h3>\n<div class="feature-content clearfix">\n<!-- content description -->\n<!-- lists -->\n<div class="cell-group">\n<p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t무선 마우스<br/>\nUnifying 수신기 <br/>\nAA 배터리 1개(설치되어 있음)<br/>\n사용 설명서\n\t\t\t\t\t\t\t</p>\n</div>\n<!-- footnote -->\n</div>\n<!-- general content -->\n<h3>제품 번호</h3>\n<div class="feature-content clearfix">\n<!-- content description -->\n<p><span class="name">그라파이트:</span> PN: 910-005111</p>\n<p><span class="name">회색:</span> PN: 910-005112</p>\n<p><span class="name">루비:</span> PN: 910-005298</p>\n<!-- lists -->\n</div>\n</li>\n</ul>\n</div>\n</div>\n</div>\n</div><!-- panel-group -->\n</div>, <div class="tabs hidden-xs">\n<!-- Nav tabs -->\n<div class="specs-header">\n<h6>사양 및 세부 정보</h6>\n</div>\n</div>',
        },
      ],
    };
  }

  render() {
    const htmlCode = [this.state.htmlBody[0].Description];
    const teaser = [this.state.htmlBody[0].Teaser];
    return <></>;
  }
}
export default ProductBody;

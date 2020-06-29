import React, { Component } from "react";
import "./CardPractice.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHoverColor: { backgroundColor: "#f6f6f6" },
      poroductNameHide: { display: "none" },
      isMouseIn: true,
    };
  }

  mouseOverHandler = () => {
    const { isMouseIn } = this.state;

    this.setState({
      cardHoverColor: {
        backgroundColor: isMouseIn ? [this.props.hoverColor] : "#f6f6f6",
      },
      poroductNameHide: { display: isMouseIn ? "block" : "none" },
      isMouseIn: !isMouseIn,
    });
  };

  render() {
    const { cardHoverColor, poroductNameHide } = this.state;
    const { imgSrc, name, thumbnailDescription } = this.props;

    return (
      <div className="Card">
        <div
          className="cardContainer"
          onMouseEnter={this.mouseOverHandler}
          onMouseLeave={this.mouseOverHandler}
        >
          <div className="productCard" style={cardHoverColor}>
            <img className="productCardImg" alt="" src={imgSrc} />
            <div className="cardPick" style={poroductNameHide}>
              <input className="check" type="checkbox" />
              선택한 항목을 비교
            </div>
          </div>
          <div className="cardProductName">{name}</div>
          <div className="cardProductInfo" style={poroductNameHide}>
            {thumbnailDescription}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

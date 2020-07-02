import React, { Component } from "react";
import "./CardPractice.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHoverColor: { backgroundColor: "#f6f6f6" },
      poroductNameHide: { display: "none" },
      isMouseIn: true,
      borderBlock: { border: "" },
    };
  }

  mouseOverHandler = () => {
    const { isMouseIn } = this.state;

    this.setState({
      cardHoverColor: {
        backgroundColor: isMouseIn ? [this.props.hoverColor] : "#f6f6f6",
      },
      poroductNameHide: { display: isMouseIn ? "block" : "none" },
      borderBlock: { border: isMouseIn ? "1px solid grey" : "" },
      isMouseIn: !isMouseIn,
    });
  };

  render() {
    const { cardHoverColor, poroductNameHide, borderBlock } = this.state;
    const { imgSrc, name, thumbnailDescription } = this.props;

    return (
      <div
        className="Card"
        onClick={() => this.props.onClick(this.props.product_id)}
      >
        <div
          className="cardContainer"
          onMouseEnter={this.mouseOverHandler}
          onMouseLeave={this.mouseOverHandler}
          style={borderBlock}
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
          <div style={poroductNameHide}>
            <ul>
              <li>
                <img src={this.props.productColor1} alt="" />
              </li>
              <li>
                <img src={this.props.productColor2} alt="" />
              </li>
              <li>
                <img src={this.props.productColor3} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";
import "./headersearch.scss";

class HeaderSearch extends Component {
  render() {
    return (
      <div class="HeaderSearch">
        <div class="imgWrap">
          <img src={this.props.thumbnailImage} alt="" />
        </div>
        <h4>{this.props.productName}</h4>
        <span>{this.props.Description}</span>
      </div>
    );
  }
}

export default HeaderSearch;

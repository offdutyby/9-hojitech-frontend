import React, { Component } from 'react'
import './card.scss'

class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            cardHoverColor:{backgroundColor:'#f6f6f6'},
            poroductNameHide:{display:'none'},
            isMouseIn: true
        }
    }

    mouseOverHandler= () => {
        const { isMouseIn } = this.state

        this.setState({
            cardHoverColor:  isMouseIn ? { backgroundColor: "skyblue" } : { backgroundColor: "#f6f6f6" },
            poroductNameHide: isMouseIn ? { display: "block" } : { display: "none" },
            isMouseIn: !isMouseIn,
        })
    }


    render() {
        return (
            <div className="Card" >
                <div className="cardContainer"  onMouseEnter={this.mouseOverHandler} onMouseLeave={this.mouseOverHandler}>
                    <div className="productCard" style={this.state.cardHoverColor}>
                        <img className="productCardImg" alt="" src={this.props.imgSrc} />
                        <div className="cardPick"style={this.state.poroductNameHide}>
                        <input type="checkbox" />선택한 항목을 비교
                        </div>
                    </div>
                    <div className="cardProductName">
                        {this.props.name}
                    </div>
                    <div className="cardProductInfo" style={this.state.poroductNameHide}>
                        로지텍 마스터 시리즈
                    </div>
                    
                </div>                
            </div>
        )
    }
}

export default Card

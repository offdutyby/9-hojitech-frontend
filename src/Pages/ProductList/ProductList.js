import React, { Component } from 'react'
import '../ProductList/productlist.scss'

// <img alt="" src=""/>

class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="navContainer"> 
                        <div className="navTextContainer">
                            <div className="mouseProductName">
                                <a href="/">마우스+키보드</a>/마우스
                            </div>
                            <div className="mouseText">
                            마우스
                            </div>
                            <div className="logitechMouse">
                            로지텍 마우스
                            </div>
                        </div>
                        <img className="navMouseImg" src="https://www.logitech.com/assets/64464/mice.png" alt=""/>
                    </div>
                </div>
                <div className="mainArticle">
                <div className="filterHideContainer">
                    <div className="filterHide">
                    <img className="filterIcon" src="https://www.logitech.com/images/icons/filter-toggle.svg" alte=""/>
                        필터 숨기기
                    </div>  
                </div>
                <div className="cardList">
                    
                </div>  
                </div>
            </div>
        )
    }
}
export default ProductList

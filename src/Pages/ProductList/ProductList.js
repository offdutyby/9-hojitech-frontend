import React, { Component } from 'react'
import '../ProductList/hello.scss'

class ProductList extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:"collectionList"
        }        
    }

    clickHandler=(e)=>{
        if(this.state.visible==="collectionList"){
            this.setState({
                visible:"collectionListActive"
            })
        }else{
            this.setState({
                visible:"collectionList"
            })
        }        
    }

    render() {
        return (
            <div className="ProductList">
                <div>
                    <div className="navContainer"> 
                        <div className="navTextContainer">
                            <div className="mouseProductName">
                                <a className="mouseKeyboardLink" href="/">마우스+키보드</a>/마우스
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
                    <div className="productListMainContainer">
                        <div className="filterHideContainer">
                        <div className="filterHide">
                            <img className="filterIcon"  src="https://www.logitech.com/images/icons/filter-toggle.svg" alt=""/>
                            <span>필터 숨기기</span>
                        </div>  
                        </div>
                        <div className="filterSidebar">
                            <div className="collectionContainer">
                                <div className="collection" onClick={this.clickHandler}>
                                    <span className="collectionName">컬렉션</span>
                                    <img className="minusImg"  alt="" src="https://www.logitech.com/images/icons/icon-collapse.svg" />
                                </div>
                                <div className={this.state.visible}>
                                    <div >
                                    MX 퍼포먼스
                                    </div>
                                    <div >
                                    인체공학 제품군
                                    </div>
                                    <div >
                                    멀티 디바이스
                                    </div>
                                    <div >
                                    무선
                                    </div>
                                    <div >
                                    비즈니스용
                                    </div>
                                    <div >
                                    게이밍 마우스
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Content">
                        </div>
                    </div>  
                </div>  
            </div>
        )
    }
}
export default ProductList

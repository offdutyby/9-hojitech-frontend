import React, { Component } from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import '../ProductList/hello.scss'

class ProductList extends Component {
    constructor(props){
    super(props)
    this.state={
        mockData:[
        {id:1,thumnailImage:"https://www.logitech.com/assets/65776/73/mx-master-3.png",productName:"MX MASTER 3",hoverColor:'red',thumbnailDescription:"상품 설명"},
        {id:2,thumnailImage:"https://www.logitech.com/assets/65107/13/mx-anywhere-2s.png",productName:"MX Anywhere 2S",hoverColor:'navy',thumbnailDescription:"상품 설명"},
        {id:3,thumnailImage:"https://www.logitech.com/assets/65685/15/logitech-pebble-m350.png",productName:"Logitech Pebble M350",hoverColor:'orange',thumbnailDescription:"상품 설명"},
        {id:4,thumnailImage:"https://www.logitech.com/assets/65122/13/wireless-mouse-m585-multi-device.png",productName:"sampleImg",hoverColor:'white',thumbnailDescription:"상품 설명"},
        {id:5,thumnailImage:"https://i.pinimg.com/474x/71/84/b9/7184b9c6f6adc1530eaa532abbbe7a4e.jpg",productName:"sample",hoverColor:'powderblue',thumbnailDescription:"상품 설명"},
        {id:6,thumnailImage:"https://i.pinimg.com/564x/15/e0/6a/15e06af473ec98a9870d3691fcb4277b.jpg",productName:"sample",hoverColor:'grey',thumbnailDescription:"상품 설명"},
        {id:7,thumnailImage:"https://i.pinimg.com/564x/15/e0/6a/15e06af473ec98a9870d3691fcb4277b.jpg",productName:"sample",hoverColor:'blue',thumbnailDescription:"상품 설명"},
        {id:8,thumnailImage:"https://i.pinimg.com/564x/15/e0/6a/15e06af473ec98a9870d3691fcb4277b.jpg",productName:"sample",hoverColor:'skyblue',thumbnailDescription:"상품 설명"},
        {id:8,thumnailImage:"https://i.pinimg.com/564x/15/e0/6a/15e06af473ec98a9870d3691fcb4277b.jpg",productName:"sample",hoverColor:'green',thumbnailDescription:"상품 설명"},
        ],
        collectionIcon: "https://www.logitech.com/images/icons/icon-collapse.svg",
        filterVisible: false
        };
    }

    collectionHandler = () => {
        const { visible } = this.state

        const collapseIcon = "https://www.logitech.com/images/icons/icon-collapse.svg"
        const expandIcon = "https://www.logitech.com/images/icons/icon-expand.svg"

        this.setState({
            collapseIcon: visible ? collapseIcon : expandIcon,
            visible: !visible
        })
    }


    clickHideHandler = () => {
        const {filterVisible} = this.state

        this.setState({
        filterVisible: !filterVisible
        })
    }

render(){
return (
<>
    <Header/>
        <div className="ProductList">
            <div>
                <div className="navContainer"> 
                    <div className="navTextContainer">
                        <div className="mouseProductName">
                        <a className="mouseKeyboardLink" href="/">
                        마우스+키보드
                        </a>
                        /마우스
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
                    <div className="filterHide" >
                        <img className="filterIcon"  src="https://www.logitech.com/images/icons/filter-toggle.svg" alt=""/>
                        <span className="filterHideText" onClick={this.clickHideHandler}>필터 숨기기</span>
                    </div>  
                </div>
                <div className="productListMainContainer">
                    <div className={`filterSidebar ${this.state.filterVisible ? "hideFilter": "showFilter"}`}>
                        <div className="collectionContainer">
                            <div className="collection"  onClick={this.collectionHandler}>
                                <span className="collectionName">컬렉션</span>
                                <img className="minusImg"  alt="" src={this.state.collectionIcon} />
                            </div>
                            <ul className={`collectionList ${this.state.visible? "show" : "hide"}`}>
                                <li >
                                MX 퍼포먼스
                                </li>
                                <li >
                                인체공학 제품군
                                </li>
                                <li >
                                멀티 디바이스
                                </li>
                                <li >
                                무선
                                </li>
                                <li >
                                비즈니스용
                                </li>
                                <li >
                                게이밍 마우스
                                </li>
                            </ul>
                        </div>
                    </div>
                        <div className="cardList">
                            <div className="content">
                                {this.state.mockData.map((el,idx)=>(
                                    <Card key={idx} imgSrc={el.thumnailImage} name={el.productName} hoverColor={el.hoverColor} thumbnailDescription={el.thumbnailDescription}/>
                                ))}
                            </div>
                        </div>                  
                </div>
            </div>  
        </div>
    <Footer/>
</>
)
}
}
export default ProductList

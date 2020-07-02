import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignUp from '../SignUp/SignUp';
import ProductRegister from '../SignUp/productregister';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import "./login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoginModalPopUpActive: false,
      isSignUpPopUpActive: false,
      isLoggedIn : false
    };
  }

  componentDidMount = () => {
    if(localStorage.getItem("token")){
      this.setState({
        isLoggedIn: true
      })
    }
  }

  openPopUp = () => {
    this.setState({
      isLoginModalPopUpActive: true
    }) 
  }

  handleWhenLoggedIn = () => {
    this.setState({
      isLoginModalPopUpActive: false,
      isLoggedIn: true
    }) 
  }

  openPopUp1 = () => {
    this.setState({
      isSignUpPopUpActive: true
    }) 
  }

  closePopUp1 = () => {
    this.setState({
      isSignUpPopUpActive: false
    }) 
  }

  handleLogOutState = () => {
    this.setState({
      isLoggedIn: false
    })
    localStorage.removeItem('token')
  }

  handleToken = () => {
    localStorage.getItem('token') ? this.props.history.push("/productregister") : alert('로그인 하세요');
  }

render() {
  return (
    <>
      <Header />
      <div className="Login">
        <div className="loginHeader">
        {this.state.isLoggedIn 
          ? <div className= "loggedIn"> 안녕하세요 <br></br> 
            <div className = "logOut" onClick= {this.handleLogOutState}>로그아웃</div></div> 
          : (
            <div className="myAccountSection">
              <h1>내 계정</h1>
              <div>
                <button onClick= {this.openPopUp}>로그인</button>
                <button onClick= {this.openPopUp1}>계정 만들기</button>
              </div>
            </div>
            )
       }
        </div>
        <div className = "wholeDiv">
          <div className= "topDiv">
            <div>
              <img src= "https://www.logitech.com/content/dam/logitech/my-account/cart.svg.imgo.svg"/>
              <h2>계정</h2>
              <h3>주문을 추적 또는 수정하고, 주문을 반환하고, 계정을 관리합니다.</h3>
              <p>계정 정보 &gt;</p>
              <p>개인정보 + 데이터 &gt;</p>
            </div>
            <div>
              <img src= "https://www.logitech.com/content/dam/logitech/my-account/compass.svg.imgo.svg"/>
              <h2>시작하기</h2>
              <h3>제품을 등록하고 시작하는 데 필요한 모든 정보를 얻으십시오.</h3>
              <p onClick = {this.handleToken}>제품 등록 &gt;</p>
              <p>다운로드 &gt;</p>
            </div>
            <div>
              <img src= "https://www.logitech.com/content/dam/logitech/my-account/cloud.svg.imgo.svg"></img>
              <h2>서비스</h2>
              <h3>모든 구독을 간편하게 관리하세요.</h3>
              <p>모든 서비스 &gt;</p>
            </div>
          </div>
          <div className= "bottomDiv">
            <div>
              <img src= "https://www.logitech.com/content/dam/logitech/my-account/question.svg.imgo.svg"></img>
              <h2>지원</h2>
              <h3>제품에 대한 궁금한 점이 있으십니까? 저희가 답해드리겠습니다.</h3>
              <p className= "clickSubItems">지원받기 &gt;</p>
              <p className= "clickSubItems">예비 부품 &gt;</p>
            </div>
            <div>
              <img src= "https://www.logitech.com/content/dam/logitech/my-account/mail.svg.imgo.svg"></img>
              <h2>이메일</h2>
              <h3>뉴스레터 구독을 통해 로지텍의 최신 정보를 확인하십시오.</h3>
              <p>뉴스레터 가입 &gt;</p>
            </div>
            <div>
                <img src= "https://www.logitech.com/content/dam/logitech/my-account/bulb.svg.imgo.svg"></img>
                <h2>추천 제품</h2>
                <h3>최다 판매 제품에 대해 자세히 알아보십시오.</h3>
                <p>최적 판매 제품 &gt;</p>
            </div>
            </div>
        </div>
      </div>
      <Footer />
      <LoginModal 
        isActive={this.state.isLoginModalPopUpActive}
        whenLoggedIn={this.handleWhenLoggedIn} 
      /> 
      <SignUp 
        isActive1={this.state.isSignUpPopUpActive} 
        isNotActive1={this.closePopUp1}/>
     </>
    )
  }
}

export default Login;


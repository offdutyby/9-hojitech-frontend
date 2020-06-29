import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Facebook from '../../Images/facebooklogo.png'
import Amazon from '../../Images/amazonlogo.png'
import Google from '../../Images/googlelogo.png'
import "./LoginModal.scss";
class LoginModal extends Component {
  render() {
    return (
      <div className = "LoginModal">
      <div className={this.props.isActive ? "SubLoginModal show" : "SubLoginModal hide"}>
        <div className="overlay">
          <div className="container">
            <div className="closebutton" onClick={this.props.isNotActive} >X
            </div>
            <img className="logoimage" src= "https://www.logitech.com/content/dam/logitech/en/header/logitech.svg"/>
            <p className="LoginSubtitle">Logi Id로 로그인하기</p>
            <input className="id" type="text" placeholder= "이메일 주소"/><br></br>
            <input className="password" type="text" placeholder="암호"/>
            <p className="forgotpw">암호를 잊으셨습니까?</p>
            <button className="button" type="button">로그인</button><br></br>
            <button className="again">또는</button>
            <div class="greyline"></div>
            <img className="facebook" src ={Facebook}/>
            <img className="amazon" src ={Amazon}/>
            <img className="google" src ={Google}/>
            <Link to="/signup"> <p class="makeaccount">{`계정만들기 >`}</p></Link>
            <p className="logiid">{`LOGI ID 정보 >`}</p>
          </div>
        </div> 
      </div> 
    </div>
    )
  }
}

export default LoginModal;
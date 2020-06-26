import React, { Component } from 'react'
import "./loginclick.scss";
import {Link} from 'react-router-dom';

class LoginClick extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    }


render() {
  return (
      <div className={this.props.isActive ? "LoginClick show" : "LoginClick hide"}>
        <div className="overlay">
          <div className= "container">
            <div className = "closebutton" onClick={this.props.isNotActive} >X
            </div>
            <img className= "logoimage" src= "https://www.logitech.com/content/dam/logitech/en/header/logitech.svg"/>
            <p className="LoginSubtitle">Logi Id로 로그인하기</p>
            <input class = "id" type="text" placeholder= "이메일 주소"/><br></br>
            <input class="password" type="text" placeholder="암호"/>
            <p class="forgotpw">암호를 잊으셨습니까?</p>
            <button class="button" type="button">로그인</button><br></br>
            <button class="again">또는</button>
            <div class= "greyline"></div>
            <img className= "facebook" src ="./facebooklogo.png"/>
            <img className= "amazon" src ="./amazonlogo.png"/>
            <img className= "google" src ="./googlelogo.png"/>
            <Link to="/signup"> <p class="makeaccount">계정만들기 ></p></Link>
            <p class="logiid">LOGI ID 정보 ></p>
          </div>
        </div> 
      </div> 
    )
    }
}
export default LoginClick
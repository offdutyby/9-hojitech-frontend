import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "./signup.scss";
class SignUp extends Component { 
  render() {
    return (
      <div className = "SignUp">
        <div className = {this.props.isActive1 ? "SubSignUp show" : "SubSignUp hide"}> 
          <div className ="overlay" >
            <div className = "container">
              <div className = "closebutton" onClick={this.props.isNotActive1}>X</div>
              <img className = "logoimage" src= "https://www.logitech.com/content/dam/logitech/en/header/logitech.svg"/>
              <h2>계정 만들기</h2>
              <h3>계정을 만들려면 다음 필드를 입력하십시오</h3>
              <input className = "id" type="text" placeholder= "이메일 주소"/><br></br>
              <input className ="password" type="text" placeholder="암호"/>
              <input className ="checkpassword" type="text" placeholder="암호 확인"/>
              <br></br>
              <input className = "firstname" type="text" placeholder= "이름"/>
              <input className = "lastname" type="text" placeholder= "성"/>
              <p className="security">계정을 생성하면 <span className= "underline">서비스 약관</span>에 동의하며 <span className= "underline">개인 정보 보호 정책</span>을 확인한 것으로 간주합니다.</p>
              <button className ="button" type="button">만들기</button>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default SignUp;

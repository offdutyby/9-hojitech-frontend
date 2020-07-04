import React, { Component } from 'react'
import {API_URL_HG} from "../../config"
import "./signup.scss";
class SignUp extends Component { 
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      checkpw: '',
      firstname:'',
      lastname:''
    };
  }

  changeHandler = e => {
    this.setState({
    [e.target.name] : e.target.value}); 
  };
  
  handleButton = () => {
    fetch(`${API_URL_HG}/account/sign-up`, {
      method: "POST",
      body:JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        first_name:this.state.firstname,
        last_name:this.state.lastname
      })
    })
      .then(res => {
        if (res.status === 200) {
          console.log("success");
          alert("회원가입 성공");
          this.props.isNotActive1();
        } else {
          return alert("다시 입력해주십시오")
        }
      })
    };

  render() {
    console.log(this.state)
    return (
      <div className = "SignUp">
        <div className = {this.props.isActive1 ? "SubSignUp show" : "SubSignUp hide"}> 
          <div className ="overlay" >
            <div className = "container">
              <div className = "closebutton" onClick={this.props.isNotActive1}>X</div>
              <img className = "logoimage" src= "https://www.logitech.com/content/dam/logitech/en/header/logitech.svg"/>
              <h2>계정 만들기</h2>
              <h3>계정을 만들려면 다음 필드를 입력하십시오</h3>
              <input className = "id" name= "id" onChange = {this.changeHandler} type="text" placeholder= "이메일 주소"/><br></br>
              <input className ="password" name= "pw" onChange = {this.changeHandler} type="password" placeholder="암호"/>
              <input className ="checkpassword" name= "checkpw" onChange = {this.changeHandler} type="password" placeholder="암호 확인"/>
              <br></br>
              <input className = "firstname" name= "firstname" onChange = {this.changeHandler} type="text" placeholder= "이름"/>
              <input className = "lastname" name= "lastname" onChange = {this.changeHandler} type="text" placeholder= "성"/>
              <p className="security">계정을 생성하면 <span className= "underline">서비스 약관</span>에 동의하며 <span className= "underline">개인 정보 보호 정책</span>을 확인한 것으로 간주합니다.</p>
              <button className ="button" onClick={this.handleButton} type="button">만들기</button>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default SignUp;

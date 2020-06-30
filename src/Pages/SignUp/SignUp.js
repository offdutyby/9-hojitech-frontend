import React, { Component } from 'react'
import {Link} from 'react-router-dom';
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

  handleID = event => {
    this.setState({
    id: event.target.value}); 
  };   

  handlePW = event => {
    this.setState({
    pw: event.target.value});
  };

  handleCheckPW = event => {
    this.setState({
    checkpw: event.target.value});
  };

  handleFirstName = event => {
    this.setState({
    firstname: event.target.value});
  };

  handleLastName = event => {
    this.setState({
    lastname: event.target.value});
  };
  
  handleButton = () => {
    fetch("http://10.58.5.139:8000/account/sign-up", {
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
              <input className = "id" onChange = {this.handleID} type="text" placeholder= "이메일 주소"/><br></br>
              <input className ="password" onChange = {this.handlePW} type="password" placeholder="암호"/>
              <input className ="checkpassword" onChange = {this.handleCheckPW} type="password" placeholder="암호 확인"/>
              <br></br>
              <input className = "firstname" onChange = {this.handleFirstName} type="text" placeholder= "이름"/>
              <input className = "lastname" onChange = {this.handleLastName} type="text" placeholder= "성"/>
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

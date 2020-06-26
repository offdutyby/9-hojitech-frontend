/*constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleButton = () => {
      fetch("http://10.58.1.225:8000/user/signin", {
          method: "POST",
          /*headers: {
              Authorization: localStorage.getItem("access_token")
          },
          body:JSON.stringify({
              email: this.state.id,
              password: this.state.pw
          })
      })
          .then(res => res.json())
          .then(res=> console.log(res))
      };

  handleID = event => {
      this.setState({
      id: event.target.value}); 
  };   

  handlePW = event => {
      this.setState({
      pw: event.target.value});
  };

  render() {
      return(
      <div class="Login">
          <img class="image" src="./img/image.png" alt="Westagram"/>
          <div class="inner-container">
              <input onChange={this.handleID} class="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
              <input onChange={this.handlePW}class="password" type="text" placeholder="비밀번호"/>
          </div>
          <button onClick={this.handleButton} class="button" type="button" style= {{opacity: this.state.id.includes("@") && this.state.pw.length > 4 ? "1" : "0.3"  }}>로그인</button>
          <br />
          <p class="forgotpw">비밀번호를 잊으셨나요?</p>
          <Link to="/Mainpage">Go to Mainpage</Link>
      </div>
      );
  }
  */
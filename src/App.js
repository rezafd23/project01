import React, {Component} from 'react';
import {Header,Footer,Body,Nav} from "./templates"

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
        page:"register",
        loginStatus:false
    }
  }

  onClickButton = (page)=>{
      this.setState({
          page
      })
  }
  setLoginStatus=(status)=>{
      console.log("cek234")
      console.log(status)
      this.setState({
          loginStatus:status
      })
  }

  render() {
    return(
        <>
          <Header/>
          <Nav loginStatus={this.state.loginStatus} status={this.setLoginStatus} toPage={this.onClickButton}/>
          <Body loginStatus={this.state.loginStatus} status={this.setLoginStatus} page={this.state.page} toPage={this.onClickButton}/>
          <Footer/>
        </>
    )
  }
}

export default App;

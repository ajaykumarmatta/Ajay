import React, { Component } from 'react';
import "./login.css"

class Login extends Component {
    constructor(){
        super();
        this.state = {
            uname:"",
            psw:"",
            isLogined: false
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })        
    }
    submitForm = (event) =>{
        //debugger;
        event.preventDefault();
        if((this.state.uname=="murali")&&(this.state.psw=="murali123")){
            this.setState({isLogined:true})
        }
    }
  render() {
    return (
        <div id="id01"> 
        {/* <h1>State:- </h1>{this.state.uname}{this.state.psw} 
        <h1>Submit state:- </h1>{this.state.isLogined} */}
        <form className="modal-content" action="#" method="post">
            
          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required onChange={this.handleChange} />
      
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required  onChange={this.handleChange} />
              
            <button type="submit" onClick={this.submitForm}>Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" readOnly/> Remember me
            </label>
          </div>
      
          <div className="container" style={{backgroundColor:"#f1f1f1"}}>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;

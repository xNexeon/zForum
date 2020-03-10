import React, { Component } from 'react';
import Fire from '../Config/Fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Config/myStyle.css'
import Register from './Register'

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
        window.alert("Your email or password is incorrect");
      });
  }

  signup(e){
    e.preventDefault();
    Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
        window.alert('Invalid entry or this email is already registered!')
      })
  }
  render() {
    return (
       <div className="col-md-6 center">
           <h1>Welcome to zForum!</h1>
           <h4>Please Log in or Register</h4>
<div className="bmodel">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"><strong>Email address</strong></label>
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
           <label htmlFor="exampleInputPassword1"><strong>Password</strong></label>
           <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
           <button type="submit" onClick={this.login} className="btn btn-success">Login</button>
           <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success fright">Register</button>
      </form>
 
</div>
</div>

    );
  }
}
export default Login;
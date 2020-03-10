import React from 'react';
import Fire from './Config/Fire';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return(
      <div>
       {this.state.user ? (<Home />) : (<Login />)}
      </div>
    )
  }
}

export default App;

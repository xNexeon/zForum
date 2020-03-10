import React from 'react';
import Fire from '../Config/Fire'
import Register from '../Components/Register'
import '../Config/myStyle.css'

class Home extends React.Component{

    logout(){
        Fire.auth().signOut();
    }

    componentDidMount(){
      const body = document.getElementsByTagName("BODY")[0];
      body.style.backgroundImage = 'url(https://wallpaperplay.com/walls/full/b/e/7/131297.jpg)';
    }

  render() {
    return(
      <div>
        <h1 class="centertext">
            Welcome to zForum!
            <button onClick={this.logout} className="btn btn-light fright">Logout</button>
        </h1>
      </div>
    )
  }
}

export default Home;

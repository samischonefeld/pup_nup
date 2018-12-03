import React, {Component} from 'react';
import Register from './register';
import Login from './login';
import Header from './header.jsx';
import Footer from './footer.jsx';



class Home extends Component{
  state ={
    toggleLogin: false,
    toggleRegister: false
  }

  toggleLogin(){
    this.setState(prevState => ({
      toggleLogin: !this.state.toggleLogin
    }))
  }
  toggleRegister(){
    this.setState(prevState => ({
      toggleRegister: !this.state.toggleRegister
    }))
  }

  render(){
    return(
      <div>
      <Header />
      <div className = "login_register">
      <div className = "button_container">
      <button className = "login_button" onClick = {() => this.toggleRegister()}>Registration!</button>
      <button className = "login_button" onClick = {() => this.toggleLogin()}>Login Here!</button>
      </div>
       {this.state.toggleLogin &&
          <div className = "register_container">
          <Login />
          </div>
        }
        {this.state.toggleRegister &&
          <div className = "register_container">
          <Register />
          </div>
        }
      </div>
      <Footer />
      </div>
      )
  }
}


export default Home;

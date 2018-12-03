import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';


class Footer extends Component{
  state = {
    returnLogin: false,
  }

returnLogin(){
this.setState(prevState => ({
  returnLogin: true
}))
}
render(){
  return(
    <footer>
    <h3>Made By Sami</h3>
    <h3 onClick = {() => this.returnLogin()}>Back To Login</h3>
    {this.state.returnLogin ? <Redirect push to= {'/'} /> : ''}
    </footer>
    )
}
}

export default Footer;

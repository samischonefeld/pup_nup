import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      dog_name: '',
      password: '',
      newId: '',
      fireRedirect: false,
    }
  }

  handleInputChange(e){

  }

  handleSubmit(e){

  }

  handleLogin(e){

  }

  render(){
    return(
      <div>
      <div className = 'login_container'>
        <label>
        Dog Name
        <input
          type = "text"
          name = "dog_name"
          value={this.state.dog_name}
          placeholder = "Dog Name"
          required
          onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <label>
        Password
        <input
          type = "password"
          name = "password"
          value = {this.state.password}
          required
          onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <button onClick = {(e) => this.handleLogin(e)}>
        Login
        </button>
      </div>
      {this.state.fireRedirect ? <Redirect push to={`/landing/${this.state.newId}`} /> : ''}
      </div>
      )

  }
}

export default Login;

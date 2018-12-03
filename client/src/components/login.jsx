import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      dog_name: '',
      password: '',
      id: '',
      fireRedirect: false,
    }
  }

  handleInputChange(e){
    console.log(`this is the input change`, e.target.value)
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]: value
    }))
  }

  handleLogin(e){
    e.preventDefault()
    console.log('this is params on login', this.state)
    axios.get(`/pup/${this.state.dog_name}`)
    .then(res => {
      console.log( 'this is res:', res)
      this.setState({
        id: res.data.data.id,
        fireRedirect: true,
      })
    })
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
          type = "text"
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
      {this.state.fireRedirect ? <Redirect push to={`/dog/${this.state.id}`} {...this.props}/> : ''}
      </div>
      )

  }
}

export default Login;

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends Component{

  state = {
      dog_name: '',
      password: '',
      id: '',
      fireRedirect: false,
  }

handleInputChange(e){
  console.log(e.target.value)
  const name = e.target.name
  const value = e.target.value
  this.setState(prevState => ({
    [name]:value
  }))
}

handleRegister(e){
  e.preventDefault()
  axios.post('/pup', {
    dog_name: this.state.dog_name,
    password: this.state.password
  }).then((res) => {
      this.setState({
        id: res.data.data.id,
        fireRedirect: true,
      })
      console.log(this.state.id)
    })
  // })
  .catch(err => console.log(err))
}




render(){

  const theID = this.state.id;

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
        <button onClick = {(e) => this.handleRegister(e)}>
        Login
        </button>
      </div>
      {this.state.fireRedirect ? <Redirect push to={`/dog/${theID}/landing/`} id = {theID}/> : ''}
      </div>
      )
  }
}

export default Register;

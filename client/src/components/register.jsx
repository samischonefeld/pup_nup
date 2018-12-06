import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends Component{

  state = {
      dog_name: '',
      dog_age: '',
      dog_breed: '',
      dog_image:'',
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

createNewAccount(e){
  e.preventDefault()
  this.handleRegister();
  this.createVet();
}

handleRegister(){
  axios.post('/pup', {
    dog_name: this.state.dog_name,
    dog_age: this.state.dog_age,
    dog_breed: this.state.dog_breed,
    dog_image: this.state.dog_image,
    password: this.state.password
  }).then((res) => {
      this.setState({
        id: res.data.data.id,
        fireRedirect: true,
      })
      console.log(this.state.id)
    })
  .catch(err => console.log(err))
}

createVet(){
  axios.post('/vet', {
    vet_name: 'Add Vet Name',
    vet_address: 'Add Vet Address',
    vet_phone: 'Add Vet phone',
    dog_id: this.state.id
  })
  .catch(err => console.log(err))
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
          Dog Age
          <input
            type = "number"
            placeholder = "Age"
            name = "dog_age"
            value = {this.state.dog_age}
            onChange = {(e) => this.handleInputChange(e)}
          />
        </label>
        <label>
          Dog Breed
          <input
            type = "text"
            placeholder = "Breed"
            name = "dog_breed"
            value = {this.state.dog_breed}
            onChange = {(e) => this.handleInputChange(e)}
          />
        </label>
        <label>
          Dog Image
          <input
            type = "text"
            placeholder = "Image"
            name = "dog_image"
            value = {this.state.dog_image}
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
        <button onClick = {(e) => this.createNewAccount(e)} >
        Register
        </button>
      </div>
      {this.state.fireRedirect ? <Redirect push to={`/dog/${this.state.id}`} id = {this.state.id}/> : ''}
      </div>
      )
  }
}

export default Register;

import React, { Component } from 'react';
import axios from 'axios';


class DogAddForm extends Component {
  state = {
    dog_age: '',
    dog_breed: '',
    dog_image: '',
    dog_id_form: '',
    fireRedirect: false,
  };

handleInputChange(e){
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]:value
    }))
  }

  handleFormSubmit(e){
    e.preventDefault()

    axios.put(`/pup/${this.props.match.params.id}`, {
      dog_age: this.state.dog_age,
      dog_breed: this.state.dog_breed,
      dog_image: this.state.dog_image
    }).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }


  render(){
    return(
      <div className = "dog_form">
      <form onSubmit = {(e) => this.handleFormSubmit(e)}>
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
        <input type = 'submit' value = "Submit" />
      </form>
      </div>
    )
  }
}

export default DogAddForm;

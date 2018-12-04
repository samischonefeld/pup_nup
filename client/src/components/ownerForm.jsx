import React, { Component } from 'react';
import axios from 'axios';

class OwnerForm extends Component {
state = {
  owner_name: '',
}

handleInputChange(e){
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]:value
    }))
}

handleSubmit(e){
  e.preventDefault()
  console.log(this.props.match.params.id)
  axios.put(`/owner/${this.props.match.params.id}`, {
    owner_name: this.state.owner_name,
  }).then(res => {
    console.log(res)
  }).catch(err => console.log(err));
}


  render(){
    return(
    <div>
    <form onSubmit = {(e) => this.handleSubmit(e)}>
    <label>
    Owner Name
    <input
    type = "text"
    placeholder = "Owner Name"
    name = "owner_name"
    value = {this.state.owner_name}
    onChange = {(e) => this.handleInputChange(e)}
    />
    </label>
    <input className = "button" type = 'submit' value = "Submit" />
    </form>
    </div>
    )
  }
}

export default OwnerForm;

import React, { Component } from 'react';
import axios from 'axios';

class OwnerAddForm extends Component{

    handleInputChange(e){
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]:value
    }))
  }

  handleAdd(e){
  e.preventDefault()
  axios.post(`/owner`, {
    owner_name: this.props.vet_name,
    dog_id: this.props.match.params.id,
  }).then(res => {
    this.setState({
      fireRedirect: true,
    })
  })
  }

  render(){
    return(
    <form onSubmit = {(e) => this.handleAdd(e)}>
    <label>
    Owner Name
    <input
    type = "text"
    placeholder = "Owner Name"
    name = "owner_name"
    value = {this.props.owner_name}
    onChange = {(e) => this.handleInputChange(e)}
    />
    </label>
    <input className = "button" type = 'submit' value = "Submit" />
    </form>
      )
  }
}

export default OwnerAddForm;

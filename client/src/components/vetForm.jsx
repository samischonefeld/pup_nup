import React, { Component } from 'react';
import axios from 'axios';


class VetForm extends Component {
  state = {
    vet_name: '',
    vet_address: '',
    vet_phone: ''
  }

  componentDidMount(){
    console.log('this is props on edit vet form', this.props)
  }

  handleInputChange(e){
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]:value
    }))
  }

handleEdit(e){
  e.preventDefault()
  console.log('this is params:', this.props.match.params.id)
  axios.put(`/vet/${this.props.match.params.id}`, {
    vet_name: this.state.vet_name,
    vet_address: this.state.vet_address,
    vet_phone: this.state.vet_phone,
  }).then(res => {
    console.log(res)
  }).catch(err => console.log(err));
}

  render(){

    return(
      <div className = "form_container">
      <form className = "vet_form">
        <label>
        Vet Name
        <input
        type = "text"
        placeholder = "Vet Name"
        name = "vet_name"
        value = {this.state.vet_name}
        onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <label>
        Vet Address
        <input
        type = "text"
        placeholder = "Vet Address"
        name = "vet_address"
        value = {this.state.vet_address}
        onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <label>
        Vet Phone
        <input
        type = "text"
        placeholder = "Vet Phone"
        name = "vet_phone"
        value = {this.state.vet_phone}
        onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <button onClick = {(e) => this.handleEdit(e)}>Submit</button>
      </form>
      </div>
      )
  }
}

export default VetForm

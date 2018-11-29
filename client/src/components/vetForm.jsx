import React, { Component } from 'react';
import axios from 'axios';


class VetForm extends Component {
  state = {
    vet_name: '',
    vet_address: '',
    vet_phone: '',
    fireRedirect: false,
    dog_id: ''
  }

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
  axios.post(`/vet`, {
    vet_name: this.state.vet_name,
    vet_address: this.state.vet_address,
    vet_phone: this.state.vet_phone,
    dog_id: this.props.match.params.id,
  }).then(res => {
    this.setState({
      fireRedirect: true,
    })
  })
  }

handleEdit(e){
  e.preventDefault()
  axios.put(`/vet/${this.props.match.params.id}`, {
    vet_name: this.state.vet_name,
    vet_address: this.state.vet_address,
    vet_phone: this.state.vet_phone,
  }).then(res => {
    this.setState({
      fireReidrect: true
    })
  })
}

  render(){
    return(
      <div>
      <form className = "vet_form" onSubmit = {(e) => this.handleAdd(e)} >
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
        value = {this.state.vet_phone}
        onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <button type ='submit'>Add</button>
        <button onClick = {(e) => this.handleEdit(e)}>Edit</button>
      </form>
      </div>
      )
  }
}

export default VetForm

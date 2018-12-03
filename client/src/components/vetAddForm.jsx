import React, { Component } from 'react';
import axios from 'axios';

class VetAddForm extends Component{

  componentDidMount(){
    console.log('this is vet add form props', this.props)
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
    vet_name: this.props.vet_name,
    vet_address: this.props.vet_address,
    vet_phone: this.props.vet_phone,
    dog_id: this.props.match.params.id,
  }).then(res => {
    this.setState({
      fireRedirect: true,
    })
  })
  }

  render(){
    return(
      <div>
        <form>
        <label>
        Vet Name
        <input
        type = "text"
        placeholder = "Vet Name"
        name = "vet_name"
        value = {this.props.vet_name}
        onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <label>
        Vet Address
        <input
        type = "text"
        placeholder = "Vet Address"
        name = "vet_address"
        value = {this.props.vet_address}
        onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <label>
        Vet Phone
        <input
        type = "text"
        placeholder = "Vet Phone"
        name = "vet_phone"
        value = {this.props.vet_phone}
        onChange = {(e) => this.handleInputChange(e)}
        />
        </label>
        <button onClick = {(e) => this.handleAdd(e)}>Add Vet</button>
        </form>
      </div>
      )
  }
}

export default VetAddForm;

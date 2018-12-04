import React, { Component } from 'react';
import axios from 'axios';

class MedAddForm extends Component{

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
  axios.post(`/medication`, {
    medication_name: this.props.medication_name,
    medication_address: this.props.medication_dose,
    dog_id: this.props.match.params.id,
  }).then(res => {
    this.setState({
      fireRedirect: true,
    })
  })
  }

render(){
  return(
      <form className = "med_form" onSubmit = {(e) => this.handleAdd(e)}>
      <label>
      Medication Name
        <input
        type = "text"
        placeholder = "Medication Name"
        name = "medication_name"
        value = {this.props.medication_name}
        onChange = {(e) => this.handleInputChange(e)}
        />
      </label>
      <label>
      Medication Dose
      <input
      type = "text"
      placeholder = "Medication Dose"
      name = "medication_dose"
      value = {this.props.medication_dose}
      onChange = {(e) => this.handleInputChange(e)}
      />
      </label>
      <input className = "button" type = 'submit' value = "Submit" />
    </form>

    )
}
}

export default MedAddForm;

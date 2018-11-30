import React, { Component } from 'react';
import axios from 'axios';

class MedicationForm extends Component{
  state = {
    medication_name: '',
    medication_dose: ''
  }

componentDidMount(){
  console.log('this is props on med form', this.props)
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
  axios.put(`/medication/${this.props.match.params.id}`, {
    medication_name: this.state.medication_name,
    medication_dose: this.state.medication_dose
  }).then(res => {
    console.log(res)
  }).catch(err => console.log(err));
}

render(){
  return(
    <div>
    <form className = "med_form" onSubmit = {(e) => this.handleSubmit(e)}>
      <label>
      Medication Name
        <input
        type = "text"
        placeholder = "Medication Name"
        name = "medication_name"
        value = {this.state.medication_name}
        onChange = {(e) => this.handleInputChange(e)}
        />
      </label>
      <label>
      Medication Dose
      <input
      type = "text"
      placeholder = "Medication Dose"
      name = "medication_dose"
      value = {this.state.medication_dose}
      onChange = {(e) => this.handleInputChange(e)}
      />
      </label>
      <input type = 'submit' value = "Submit" />
    </form>
    </div>
    )
}
}

export default MedicationForm;

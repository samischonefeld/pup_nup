import React, { Component } from 'react'
import axios from 'axios';
import MedicationForm from './medicationForm.jsx';

class Medication extends Component{
state = {
    medication: '',
    getData: false
}

componentDidMount(){
  console.log('this is props in medication: ', this.props)
  axios.get(`/medication/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        getData: true,
        medication: res.data.data
      })
      console.log('this is medication state', this.state.medication)
    }).catch(err => console.log(err))
}

render(){
    return(
      <div>
      <div className = "medication_title">
      <h1>Your Dog's Medication</h1>
      </div>
      <div className = "med_info">
      <h2>{this.state.medication.medication_name}</h2>
      <p>{this.state.medication.medication_dose}</p>
      </div>
      <MedicationForm {...this.props}/>
      </div>
      )
  }
}

// Will need to map over medication...

export default Medication;

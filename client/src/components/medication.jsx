import React, { Component } from 'react'
import axios from 'axios';
import MedicationForm from './medicationForm.jsx';

class Medication extends Component{
state = {
    medication: '',
    getData: false,
    toggleMedicationForm: false
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

toggleMedicationForm(){
  this.setState(prevState => ({
    toggleMedicationForm: !prevState.toggleMedicationForm
  }))
}
render(){
    return(
      <div>
        <div className = "med_info">
          <p className ="minor_info">{this.state.medication.medication_name}</p>
          <p className ="minor_info">{this.state.medication.medication_dose}</p>
        </div>
        <div className = "medication_form">
          <button onClick = {() => this.toggleMedicationForm()}>Edit Meds</button>
          {this.state.toggleMedicationForm &&
            <MedicationForm {...this.props}/>
          }
        </div>
      </div>
      )
  }
}

// Will need to map over medication...

export default Medication;

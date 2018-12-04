import React, { Component } from 'react'
import axios from 'axios';
import MedicationForm from './medicationForm.jsx';
import MedAddForm from './medicationAddForm.jsx';

class Medication extends Component{
state = {
    medication: '',
    getData: false,
    toggleMedicationForm: false,
    medInfo: '',
    medication_name: 'add',
    medication_dose: 'add',
}

componentDidMount(){
  console.log('this is props in medication: ', this.props)
  axios.get(`/medication/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        getData: true,
        medication: res.data.data,
        medication_name: res.data.data.medication_name,
        medication_dose: res.data.data.medication_dose,
      })
      this.medInfoStatus();
    }).catch(err => console.log(err))
}

medInfoStatus(){
  if(this.state.medication_name === 'add'){
    this.setState(prevState => ({
      medInfo: false,
    }))
  } else {
    this.setState(prevState => ({
      medInfo: true,
    }))
  }
}

toggleMedicationForm(){
  this.setState(prevState => ({
    toggleMedicationForm: !prevState.toggleMedicationForm
  }))
}

render(){
    return(
      <div>
      { this.state.medInfo ? (
        <div>
        <div className = "med_info">
          <p className ="minor_info">Medication Name: {this.state.medication_name}</p>
          <p className ="minor_info"> Medication Dose: {this.state.medication_dose}</p>
        </div>
        <div className = "medication_form">
          <button onClick = {() => this.toggleMedicationForm()}>Edit Meds</button>

          {this.state.toggleMedicationForm &&
            <MedicationForm {...this.props}/>
          }
        </div>
        </div>
        ) : (
        <div>
        <MedAddForm {...this.props} />
        </div>
        ) }
      </div>
      )
  }
}

export default Medication;

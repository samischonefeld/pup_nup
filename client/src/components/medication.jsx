import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Medication extends Component{
state = {
    medication: null,
    getData: false
}

componentDidMount(){
  console.log('this is props: ', this.props)
  axios.get(`/vet/${this.props.match.params.dog_id}`)
    .then(res => {
      this.setState({
        getData: true,
        vet: res.data.data
      })
    }).catch(err => console.log(err))
}

render(){
    return(
      <div>
      <div className = "medication_title">
      <h1>Your Dog's Medication</h1>
      </div>
      <div className = "med_info">
      <h2>MEDICATION NAME HERE</h2>
      <p>MEDICATION DOSE HERE  </p>
      </div>
      <Link to = '/dog/:id'> Dog </Link>
      </div>
      )
  }
}

// Will need to map over medication...

export default Medication;

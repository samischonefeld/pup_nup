import React, { Component } from 'react';
import axios from 'axios';
import VetForm from './vetForm.jsx';


class Vet extends Component {
  state = {
    vet: '',
    getData: false
  }

  componentDidMount(){
    console.log('this is props on vet: ', this.props.match.params.id)
    axios.get(`/vet/${this.props.match.params.id}`)
      .then(async res => {
        this.setState({
          getData: true,
          vet: res.data.data
        })
        await console.log('this is vet info', res.data)
        console.log(this.state.vet.vet_name)
      }).catch(err => console.log(err))
  }


render(){
  return(
    <div>
    <div className = "vet_title">
    <h1>Your Dog's Medical Information</h1>
    </div>
    <div>
      <ul>
        <li>{this.state.vet.vet_name}</li>
        <li>{this.state.vet.vet_address}</li>
        <li>{this.state.vet.vet_phone}</li>
      </ul>
    </div>
    <div>
    <VetForm {...this.props} />

    </div>
    </div>
    )
  }
}

export default Vet;




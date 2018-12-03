import React, { Component } from 'react';
import axios from 'axios';
import VetForm from './vetForm.jsx';


class Vet extends Component {
  state = {
    vetName: 'Add Vet Name',
    vetAddress:'Add Vet Address',
    vetPhone: 'Add Vet Phone',
    getData: false,
    toggleVetForm: false
  }

  componentDidMount(){
    console.log('this is props on vet: ', this.props.match.params.id)
    axios.get(`/vet/${this.props.match.params.id}`)
      .then(async res => {
        this.setState({
          getData: true,
          vetName: res.data.data.vet_name,
          vetAdress: res.data.data.vet_address,
          vetPhone: res.data.data.vet_phone
        })
        await console.log('this is vet info', res.data)
        console.log(this.state.vet.vet_name)
      }).catch(err => console.log(err))
  }

toggleVetForm(){
  this.setState(prevState => ({
        toggleVetForm: !prevState.toggleVetForm
      }))
}

render(){
  return(
    <div>
      <div className = "vet_title">
        <h1>Your Dog's Medical Information</h1>
      </div>
      <div>
        <ul>
          <li>{this.state.vetName}</li>
          <li>{this.state.vetAddress}</li>
          <li>{this.state.vetPhone}</li>
        </ul>
      </div>
      <div className = "toggleVetForm">
        <button onClick ={() => this.toggleVetForm()}>Edit Medical Info</button>
        {this.state.toggleVetForm &&
          <VetForm {...this.props} />
        }
      </div>
    </div>
    )
  }
}

export default Vet;




import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Vet extends Component {
  state = {
    vet: null,
    getData: false
  }

  componentDidMount(){
    console.log('this is props from dog: ', this.props)
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
    <Link to ='/medication/:id'> Medications </Link>
    </div>
    )
  }
}

export default Vet;

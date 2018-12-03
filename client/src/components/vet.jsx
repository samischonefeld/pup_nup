import React, { Component } from 'react';
import axios from 'axios';
import VetForm from './vetForm.jsx';


class Vet extends Component {
  state = {
    vet: '',
    getData: false,
    toggleVetForm: false
  }

  componentDidMount(){
    console.log('this is props on vet: ', this.props.match.params.id)
    axios.get(`/vet/${this.props.match.params.id}`)
      .then(async res => {
        this.setState({
          getData: true,
          vet: res.data.data,
        })
        console.log('this is vet info', res.data.data)
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
      <div>
          <p className ="minor_info">{this.state.vet.vet_name}</p>
          <p className ="minor_info">{this.state.vet.vet_address}</p>
          <p className ="minor_info">{this.state.vet.vet_phone}</p>
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




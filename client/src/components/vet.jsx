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
        console.log("this is vet on res", res)
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
  console.log(this.state.vet)
  return(
    <div className = "dropdown_content">
      <div>
          <p className ="minor_info">{this.state.vet.vet_name}</p>
          <p className ="minor_info">{this.state.vet.vet_address}</p>
          <p className ="minor_info">{this.state.vet.vet_phone}</p>
      </div>
      <div className = "toggleVetForm">
        <button onClick ={() => this.toggleVetForm()}>Edit Vet</button>
        {this.state.toggleVetForm &&
          <VetForm {...this.props} />
        }
      </div>
    </div>
    )
  }
}

export default Vet;




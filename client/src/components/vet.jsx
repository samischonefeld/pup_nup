import React, { Component } from 'react';
import axios from 'axios';
import VetForm from './vetForm.jsx';
import VetAddForm from './vetAddForm.jsx';


class Vet extends Component {
  state = {
    vet: '',
    getData: false,
    toggleVetForm: false,
    vetInfo: '',
    vet_name: 'add',
    vet_address: 'add',
    vet_phone: 'add'
  }


  componentDidMount(){
    axios.get(`/vet/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          getData: true,
          vet: res.data.data,
          vet_name: res.data.data.vet_name,
          vet_address: res.data.data.vet_address,
          vet_phone: res.data.data.vet_phone,
        })
         this.vetInfoStatus();
         console.log(this.state.vetInfo)
      }).catch(err => console.log(err))
  }

vetInfoStatus(){
  if(this.state.vet_name === 'add'){
    this.setState(prevState => ({
      vetInfo: false,
    }))
  } else {
    this.setState(prevState => ({
      vetInfo: true,
    }))
  }
}

toggleVetForm(){
  this.setState(prevState => ({
        toggleVetForm: !prevState.toggleVetForm
      }))
}

render(){

  return(
    <div className = "dropdown_content">
    { this.state.vetInfo ? (
      <div>
      <div>
          <p className ="minor_info">Vet Name: {this.state.vet_name}</p>
          <p className ="minor_info">Vet Address: {this.state.vet_address}</p>
          <p className ="minor_info">Vet Phone: {this.state.vet_phone}</p>
      </div>
      <div className = "toggleVetForm">
        <button onClick ={() => this.toggleVetForm()}>Edit Vet</button>

        {this.state.toggleVetForm &&
          <VetForm {...this.props} />
        }
      </div>

      </div>
      ) : (
      <div>
      <VetAddForm {...this.props} />
      </div>
      )}
    </div>
    )
  }
}

export default Vet;




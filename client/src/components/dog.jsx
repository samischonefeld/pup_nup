import React, { Component } from 'react';
import axios from 'axios';
import DogAddForm from './dogAddForm.jsx';
import Vet from './vet.jsx';
import Medication from './medication.jsx';
import Owner from './owner.jsx'

class Dog extends Component{
  state = {
    dog: '',
    getData: false,
    toggleDogForm: false
  }

componentDidMount(){
    console.log('this is the id from dog: ', this.props.match.params.id)
    axios.get(`/pup/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          getData: true,
          dog: res.data.data,
          DogId: res.data.data.id
        })
        console.log(this.state.dog)
      }).catch(err => console.log(err))
  }

toggleDogForm(){
      this.setState(prevState => ({
      toggleDogForm: !prevState.toggleDogForm
    }))
}
  render(){
    console.log('this is props 2.0', this.props)
    return(
      <div>
        <div className = "dog_info">
            <div className = "dog_image">
              <img src = {this.state.dog.dog_image} alt ={this.state.dog.dog_name} />
            </div>
          <div className = "dog_name">
            <h2>{this.state.dog.dog_name}</h2>
            <h3>{this.state.DogId}</h3>
          </div>
          <div>
            <h3>{this.state.dog.dog_breed}</h3>
            <h3>{this.state.dog.dog_age}</h3>
          </div>
          <button onClick={() => this.toggleDogForm()}>Edit Dog</button>
            {this.state.toggleDogForm &&
            <DogAddForm  {...this.props} />
            }
        </div>
        <div className = "vet_container">
          <Vet {...this.props} />
        </div>
        <div className = "medication_container">
          <Medication {...this.props} />
        </div>
        <div className = "owner_container">
          <Owner {...this.props} />
        </div>
      </div>
      )
  }
}

export default Dog;


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
    toggleDogForm: false,
    toggleVetInfo: false,
    toggleMedInfo: false,
    toggleOwnerInfo: false
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

toggleVetInfo(){
this.setState(prevState => ({
  toggleVetInfo: !prevState.toggleVetInfo
}))
}
toggleMedInfo(){
this.setState(prevState => ({
  toggleMedInfo: !prevState.toggleMedInfo
}))
}
toggleOwnerInfo(){
this.setState(prevState => ({
  toggleOwnerInfo: !prevState.toggleOwnerInfo
}))
}


  render(){
    console.log('this is props 2.0', this.props)
    return(
      <div>
        <div className = "dog_info">
            <div className = "dog_image">
              <img className= "dog_prof" src = {this.state.dog.dog_image} alt ={this.state.dog.dog_name} />
            </div>
          <div className = "dog_list">
            <h2>{this.state.dog.dog_name}</h2>
            <h3>{this.state.dog.dog_breed}</h3>
            <h3>{this.state.dog.dog_age}</h3>
            <button onClick={() => this.toggleDogForm()}>Edit Dog</button>
              {this.state.toggleDogForm &&
              <DogAddForm  {...this.props} />
              }
        </div>
        </div>
        <div className = "dropdown_container">
        <div className = "vet_container info_container">
          <section className = "vet_section toggle_div" onClick={() => this.toggleVetInfo()} >
            <h2>Vet Information</h2>
            <img className = "plus_icon" src= "https://i.imgur.com/gb02WVI.png" alt = "plus_icon"/>
          </section>
          {this.state.toggleVetInfo &&
            <Vet {...this.props} />
          }
        </div>
        <div className = "medication_container info_container">
          <section className = "medication_section toggle_div" onClick={() => this.toggleMedInfo()}>
            <h2>Medicinal Information</h2>
            <img className = "plus_icon" src= "https://i.imgur.com/gb02WVI.png" alt = "plus_icon"/>
          </section>
          {this.state.toggleMedInfo &&
            <Medication {...this.props} />
          }
        </div>
        <div className = "owner_container info_container">
          <section className = "owner_section toggle_div" onClick={() => this.toggleOwnerInfo()}>
            <h2>Owner Information</h2>
            <img className = "plus_icon" src= "https://i.imgur.com/gb02WVI.png" alt = "plus_icon"/>

          </section>
          {this.state.toggleOwnerInfo &&
            <Owner {...this.props} />
          }
        </div>
      </div>
      </div>
      )
  }
}

export default Dog;


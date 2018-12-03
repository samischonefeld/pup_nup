import React, { Component } from 'react';
import axios from 'axios';
import DogAddForm from './dogAddForm.jsx';
import Vet from './vet.jsx';
import Medication from './medication.jsx';
import Owner from './owner.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';

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
      <Header />
        <div className = "dog_info">
            <div className = "dog_image">
              <img className= "dog_prof" src = {this.state.dog.dog_image} alt ={this.state.dog.dog_name} />
            </div>
          <div className = "dog_list">
            <h2 className = "major_info">{this.state.dog.dog_name}</h2>
            <p className = "minor_info">{this.state.dog.dog_breed}</p>
            <p className = "minor_info">{this.state.dog.dog_age} years old</p>
            <button onClick={() => this.toggleDogForm()}>Edit Dog</button>
              {this.state.toggleDogForm &&
              <DogAddForm  {...this.props} />
              }
        </div>
        </div>
        <div className = "dropdown_container">
        <div className = "vet_container info_container">
          <section className = "vet_section toggle_div" onClick={() => this.toggleVetInfo()} >
            <h2 className ="dropdown_title major_info">Vet Information</h2>
            <p className = "plus_icon">+</p>
          </section>
          {this.state.toggleVetInfo &&
            <Vet {...this.props} />
          }
        </div>
        <div className = "medication_container info_container">
          <section className = "medication_section toggle_div" onClick={() => this.toggleMedInfo()}>
            <h2 className ="dropdown_title major_info">Medical Information</h2>
            <p className = "plus_icon">+</p>
          </section>
          {this.state.toggleMedInfo &&
            <Medication {...this.props} />
          }
        </div>
        <div className = "owner_container info_container">
          <section className = "owner_section toggle_div" onClick={() => this.toggleOwnerInfo()}>
            <h2 className ="dropdown_title major_info">Owner Information</h2>
            <p className = "plus_icon">+</p>
          </section>
          {this.state.toggleOwnerInfo &&
            <Owner {...this.props} />
          }
        </div>
      </div>
      <Footer />
      </div>
      )
  }
}

export default Dog;


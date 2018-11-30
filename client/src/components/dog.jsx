import React, { Component } from 'react';
import axios from 'axios';
import DogAddForm from './dogAddForm.jsx';

class Dog extends Component{
  state = {
    dog: '',
    getData: false
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

  render(){
    return(
      <div>
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
      <DogAddForm {...this.state} />
      </div>
      )
  }
}

export default Dog;

      // <div className = "dog_image">
      //   <img src = {this.state.dog.dog_image} alt ={this.state.dog.dog_name} />
      // </div>
      // <div className = "dog_name">
      // <h2>{this.state.dog.dog_name}</h2>
      // </div>
      // <div>
      // <h3>{this.state.dog.dog_breed}</h3>
      // <h3>{this.state.dog.dog_age}</h3>
      // </div>

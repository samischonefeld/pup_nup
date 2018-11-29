import React, { Component } from 'react';
import axios from 'axios';

class Dog extends Component{
  state = {
    dog: null,
    getData: false
  }

  componentDidMount(){
    console.log('this is props from dog: ', this.props)
    axios.get(`/pup/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          getData: true,
          dog: res.data.data
        })
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
      </div>
      <div>
      <h3>{this.state.dog.dog_breed}</h3>
      <h3>{this.state.dog.dog_age}</h3>
      </div>
      </div>
      )
  }
}

export default Dog;

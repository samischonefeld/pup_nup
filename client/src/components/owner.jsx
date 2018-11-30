import React, { Component } from 'react';
import OwnerAddForm from './ownerAddForm.jsx';
import axios from 'axios';

class Owner extends Component{
  state = {
    owner: '',
    getData: false
  }

componentDidMount(){
      console.log('this is props on owner: ', this.props.match.params.id)
    axios.get(`/owner/${this.props.match.params.id}`)
      .then(async res => {
        this.setState({
          getData: true,
          owner: res.data.data
        })
        await console.log('this is owner info', res.data)
      }).catch(err => console.log(err))
}

  render(){
    return(
      <div>
      <div className = "owner_info">
      <h1>About the Owner</h1>
        <p>{this.state.owner.owner_name}</p>
      </div>
      <OwnerAddForm {...this.props} />
      </div>
      )
  }
}

export default Owner;


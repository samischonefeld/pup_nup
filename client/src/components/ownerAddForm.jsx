import React, { Component } from 'react';
import axios from 'axios';


class OwnerAddForm extends Component {
state = {
  owner: '',

}
componentDidMount(){
  axios.get(`/owner/${this.props.match.params.dog_id}`)
  .then(res =>{
    this.setState => {
      getData: true,

    }
  }
    )
  }
}

  render(){
    return(
      <div>
      form goes here
      </div>
      )
  }
}

export default OwnerAddForm;

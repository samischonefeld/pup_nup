import React, { Component } from 'react';
import OwnerAddForm from './ownerAddForm.jsx';
import axios from 'axios';

class Owner extends Component{
  state = {
    owner: '',
    getData: false,
    toggleOwnerForm: false
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

toggleOwnerForm(){
  this.setState(prevState => ({
    toggleOwnerForm: !prevState.toggleOwnerForm
  }))
}
  render(){
    return(
      <div>
        <div className = "owner_info">
          <p className ="minor_info">{this.state.owner.owner_name}</p>
        </div>
        <div className = "owner_form">
          <button onClick = {() => this.toggleOwnerForm()}>Edit Owner</button>
          {this.state.toggleOwnerForm &&
            <OwnerAddForm {...this.props} />
          }
        </div>
      </div>
      )
  }
}

export default Owner;


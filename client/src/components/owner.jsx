import React, { Component } from 'react';
import axios from 'axios';
import OwnerAddForm from './ownerAddForm.jsx';
import OwnerForm from './ownerForm.jsx'

class Owner extends Component{
  state = {
    owner: '',
    owner_name: 'add',
    ownerInfo: '',
    getData: false,
    toggleOwnerForm: false
  }

componentDidMount(){
      console.log('this is props on owner: ', this.props.match.params.id)
    axios.get(`/owner/${this.props.match.params.id}`)
      .then(async res => {
        this.setState({
          getData: true,
          owner_name: res.data.data.owner_name,
        })
        this.ownerInfoStatus()
      }).catch(err => console.log(err))
}

ownerInfoStatus(){
  if(this.state.owner_name === 'add'){
    this.setState(prevState => ({
      ownerInfo: false,
    }))
  } else {
    this.setState(prevState => ({
      ownerInfo: true,
    }))
  }
}

toggleOwnerForm(){
  this.setState(prevState => ({
    toggleOwnerForm: !prevState.toggleOwnerForm
  }))
}

  render(){
    return(
      <div>
        { this.state.ownerInfo ? (
        <div>
        <div className = "owner_info">
          <p className ="minor_info"> Owner Name: {this.state.owner_name} </p>
        </div>
        <div className = "owner_form">
          <button onClick = {() => this.toggleOwnerForm()}>Edit Owner</button>
          {this.state.toggleOwnerForm &&
            <OwnerForm {...this.props} />
          }
        </div>
      </div>
      ) : (
      <div>
      <OwnerAddForm {...this.props} />
      </div>
      )}
    </div>
  )
}
}

export default Owner;


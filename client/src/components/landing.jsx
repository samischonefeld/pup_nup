import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{

    componentDidMount(){

        console.log('this is supposed to be props id', this.props.match.params.id)
    }

    render(){
  return(
    <div>
    <Link to= {`/dog/${this.props.match.params.id}`} > Dog </Link>
    <Link to = {`/dog/${this.props.match.params.id}/owner`} > Owner </Link>
    <Link to = {`/dog/${this.props.match.params.id}/vet`} > Vet </Link>
    <Link to = {`/dog/${this.props.match.params.id}/vet/medication`} > Medication </Link>
    <Link to = {`/dog/${this.props.match.params.id}/tasks`} > Task </Link>
    </div>
    )
    }
}

export default Landing;

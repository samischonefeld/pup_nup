import React from 'react';
import { Link } from 'react-router-dom';

function Landing(){
  return(
    <div>
    this is the user landing page
    <Link to='/dog'> Dog </Link>
    <Link to = '/owner'> Owner </Link>
    <Link to = '/medication'> Medication </Link>
    <Link to = '/tasks'> Task </Link>
    </div>
    )
}

export default Landing;

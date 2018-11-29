import React from 'react';
import { Link } from 'react-router-dom';

function Landing(){
  return(
    <div>
    this is the user landing page
    <Link to='/dog/:id'> Dog </Link>
    <Link to = '/owner/:id'> Owner </Link>
    <Link to = '/dog/:id/vet'> Vet </Link>
    <Link to = '/dog/:id/vet/medication'> Medication </Link>
    <Link to = '/dog/:id/tasks'> Task </Link>
    </div>
    )
}

export default Landing;

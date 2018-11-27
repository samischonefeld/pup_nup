import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
    this is Home
    <ul>
    <li><Link to='/login'> LogIn </Link></li>
    <li><Link to='/register'>Register</Link></li>
    </ul>
    </div>
    )
}

export default Home;

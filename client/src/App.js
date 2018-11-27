import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Tasks from './components/tasks.jsx';
import Vet from './components/vet.jsx';
import Dog from './components/dog.jsx';
import Owner from './components/owner.jsx';
import Landing from './components/landing.jsx';
import Medication from './components/medication.jsx';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route exact path = '/login' component = { Login } />
        <Route exact path = '/register' component = { Register } />
        <Route exact path = '/landing' component = { Landing } />
        <Route exact path = '/tasks' component = { Tasks } />
        <Route exact path = '/vet' component = { Vet } />
        <Route exact path = '/medication' component = { Medication } />
        <Route exact path = '/dog' component = { Dog } />
        <Route exact path = '/owner' component = { Owner } />
        <Route exact path = '/' component = { Home } />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;


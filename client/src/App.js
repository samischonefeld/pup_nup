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
import DogAddForm from './components/dogAddForm.jsx';
import VetForm from './components/vetForm.jsx';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route exact path = '/login' component = { Login } />
        <Route exact path = '/register' component = { Register } />
        <Route exact path = '/dog/:id/dogaddform' component = {DogAddForm} />
        <Route exact path = '/dog/:id/landing' component = { Landing } />
        <Route exact path = '/dog/:id/tasks' component = { Tasks } />
        <Route exact path = '/dog/:id/vet' component = { Vet } />
        <Route exact path = '/dog/:id/vet/vetform' component = { VetForm } />
        <Route exact path = '/dog/:id/vet/medication' component = { Medication } />
        <Route exact path = '/dog/:id' component = { Dog } />
        <Route exact path = '/owner/:id' component = { Owner } />
        <Route exact path = '/' component = { Home } />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;


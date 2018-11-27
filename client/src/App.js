import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Tasks from './components/tasks.jsx';
import Vet from './components/vet.jsx';
import Dog from './components/dog.jsx';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route path = '/login' component = { Login } />
        <Route path = '/register' component = { Register } />
        <Route path = '/tasks' component = { Tasks } />
        <Route path = '/vet' component = { Vet } />
        <Route path = '/dog' component = { Dog } />
        <Route path = '/' component = { Home } />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;


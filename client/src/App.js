import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.jsx';
import Tasks from './components/tasks.jsx';
import Dog from './components/dog.jsx';
import Owner from './components/owner.jsx';

function App() {

    return (
      <Router>
      <div className="App">
      <Switch>
        <Route exact path = '/dog/:id/tasks' component = { Tasks } />
        <Route exact path = '/dog/:id' render = {(props) => (<Dog {...props} />)} />
        <Route exact path = '/dog/:id/owner' component = { Owner } />
        <Route exact path = '/' component = { Home } />
      </Switch>
      </div>
      </Router>
    );

}

export default App;


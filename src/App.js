import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import User from './components/pages/User';
import {BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {

    return(
    <Router>
      <div className="App">
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user/:login" component={User} />
        </div>
      </div>
    </Router>
  );

}

export default App;

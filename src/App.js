import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {

  alert = null;

  render() {
    return(
    <Router>
      <div className="App">
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
  }

}

export default App;

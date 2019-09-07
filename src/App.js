import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import axios from 'axios';

class App extends React.Component {

  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    console.log("loading data from api");
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log("loaded data from api");

    this.setState({
      loading: false,
      users: res.data
    });

  }

  render() { 
    return(
    <div className="App">
      <Navbar title='Github Finder' icon='fab fa-github' />
      <div className='container'>
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    </div>
  );
  }



}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends React.Component {

  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    
  }

  clearUsers = () => {
    this.setState({
      loading: false,
      users: [],
      alert: null
    })
  };

  searchUsers = async (text) => {

    this.setState({loading: true, alert: null});

    console.log("loading data from api");
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log("loaded data from api");

    this.setState({
      loading: false,
      users: res.data.items
    });
  };

  setAlert = (message, type) =>  {
    this.setState({
      alert: {message: message, type: type}
    });
  };

  render() {

    return(
    <div className="App">

      <Navbar title='Github Finder' icon='fab fa-github' />
      <div className='container'>
        <Alert alert={this.state.alert} />
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    </div>
  );
  }



}

export default App;

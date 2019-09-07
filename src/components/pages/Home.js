import React from 'react';
import '../../App.css';
import Users from '../users/Users'
import axios from 'axios';
import Search from '../users/Search';
import Alert from '../layout/Alert';

class Home extends React.Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  async componentDidMount() {
    
  }

  clearUsers = () => {
    this.setState({
      alert: null,
      loading: false,
      users: []
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
      <>

      <Alert alert={this.state.alert} />

      <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />
      <Users users={this.state.users} loading={this.state.loading} />
      </>
    );
  }



}

export default Home;

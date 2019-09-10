import React from 'react';
import '../../App.css';
import Users from '../users/Users'
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

  async componentDidUpdate() {

  }

  clearUsers = () => {
    this.setState({
      alert: null,
      loading: false,
      users: []
    })
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

      <Search clearUsers={this.clearUsers} setAlert={this.setAlert} />
      <Users />
      </>
    );
  }



}

export default Home;

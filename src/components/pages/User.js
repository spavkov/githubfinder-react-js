import React from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom'

class User extends React.Component {
    state = {
        data: {},
        loading: false
    };

    getUser = async (username) => {
        this.setState({loading: true});
    
        console.log("loading user data from api");
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log("loaded user data from api");
        
        return res;

      };

    async componentDidMount() {
        let result = await this.getUser(this.props.match.params.login);
        console.log(result);
        this.setState({data: result.data, loading: false});
    }

    render() {
        if (this.state.loading)
            return <Spinner />
        else
            return (
                <>
                <Link to='/' className='btn btn-light'>Back to search</Link>
                Hireable: {' '}
                {this.state.data.hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" /> }
                <div className="card grid-2">
                    <div className='all-center'>
                        <img src={this.state.data.avatar_url} className='round-img' style={{ width: '150px'}} />
                        <h1>{this.state.data.name}</h1>
                        <p>{this.state.data.location}</p>
                    </div>
                </div>
                </>
            );
    }
    
}

export default User;
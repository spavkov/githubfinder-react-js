import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom'

const User = (props) => {

    const [ourState, setOurState] = useState({
        data: {},
        loading: false
    });

    const getUser = async (username) => {
        setOurState({loading: true});
    
        console.log("loading user data from api");
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log("loaded user data from api");
        
        return res;
      };

      // if we have the async/await calls in useEffect, has to be done like this:
      useEffect(() => {
        const fetchOurData = async () => {
            let result = await getUser(props.match.params.login);
            setOurState({data: result.data, loading: false});            
        }
        fetchOurData();
    }, [props.match.params.login]);

    if (ourState.loading)
        return <Spinner />
    else
        return (
            <>
            <Link to='/' className='btn btn-light'>Back to search</Link>
            Hireable: {' '}
            {ourState.data.hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" /> }
            <div className="card grid-2">
                <div className='all-center'>
                    <img alt={ourState.login} src={ourState.data.avatar_url} className='round-img' style={{ width: '150px'}} />
                    <h1>{ourState.data.name}</h1>
                    <p>{ourState.data.location}</p>
                </div>
            </div>
            </>
        );
    
}

export default User;
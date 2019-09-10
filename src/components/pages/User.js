import React, {useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/gitHubContext';

const User = (props) => {
    const githubContext = useContext(GithubContext);

    useEffect(() => {
        githubContext.getUser(props.match.params.login);      
// eslint-disable-next-line         
    }, [props.match.params.login]);

    if (githubContext.loading)
        return <Spinner />
    else
        return (
            <>
            <Link to='/' className='btn btn-light'>Back to search</Link>
            Hireable: {' '}
            {githubContext.user.hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" /> }
            <div className="card grid-2">
                <div className='all-center'>
                    <img alt={githubContext.user.login} src={githubContext.user.avatar_url} className='round-img' style={{ width: '150px'}} />
                    <h1>{githubContext.user.name}</h1>
                    <p>{githubContext.user.location}</p>
                </div>
            </div>
            </>
        );
    
}

export default User;
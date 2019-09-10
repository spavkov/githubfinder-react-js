import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './gitHubContext';
import GitHubReducer from './gitHubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(GitHubReducer, initialState);

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    };

    const searchUsers = async (text) => {
        setLoading();
    
        console.log("loading data from api");
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log("loaded data from api");
    
        dispatch({
            type: SEARCH_USERS,
            payload: res.data
        });
    }

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        });
    }

    return <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                loading: state.loading,
                searchUsers,
                clearUsers
            }}
            >
            {props.children}                
           </GithubContext.Provider>    
}

export default GithubState;
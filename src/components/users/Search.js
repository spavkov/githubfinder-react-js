import React, {useState, useContext} from 'react';
import GitHubContext from '../../context/github/gitHubContext';
import githubContext from '../../context/github/gitHubContext';
import { CLEAR_USERS } from '../../context/types';
import { statement } from '@babel/template';

const Search = ( props ) => {

    const gitHubContext = useContext(GitHubContext);

    const [text, setText] = useState('');

    const onTextChanged = (event) => {
        setText(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (text === '')
        {
            props.setAlert('Ple ase enter search query', 'light')
            return;
        }

        gitHubContext.searchUsers(text);
        setText(text);
    }

    const doClearUsers = () => {
        setText('');
        githubContext.clearUsers();
    };

    return(
        <div>
            <form className="form" onSubmit={onSubmit} >
                <input type="text" name="text" placeholder="Search users..." value={text} onChange={onTextChanged} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {
                gitHubContext.users.length > 0 ? 
                <button className="btn btn-light btn-block" onClick={doClearUsers}>Clear</button>
                : ""
            }            
        </div>
    );
}

export default Search;
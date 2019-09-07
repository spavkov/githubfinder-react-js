import React, {useState} from 'react';

const Search = ( props ) => {

    const [text, setText] = useState('');

    const onTextChanged = (event) => {
        setText(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (text === '')
        {
            props.setAlert('Please enter search query', 'light')
            return;
        }

        props.searchUsers(text);
        setText(text);
    }

    const doClearUsers = () => {
        setText('');
        props.clearUsers();
    };

    return(
        <div>
            <form className="form" onSubmit={onSubmit} >
                <input type="text" name="text" placeholder="Search users..." value={text} onChange={onTextChanged} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {
                props.showClear ? 
                <button className="btn btn-light btn-block" onClick={doClearUsers}>Clear</button>
                : ""
            }
            
        </div>
    );
}

export default Search;
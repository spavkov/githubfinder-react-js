import React from 'react';

class Search extends React.Component {

    state = {
        text: ''
      }

    onTextChanged = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }

    render(){
        return(
            <div>
                <form className="form" onSubmit={this.onSubmit} >
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onTextChanged} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {
                    this.props.showClear ? 
                    <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
                    : ""
                }
                
            </div>
        );
    }

}

export default Search;
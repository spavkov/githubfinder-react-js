import React from 'react';
import UserItem from './UserItem'

class Users extends React.Component{

    state = {
        users: [
            {
                id: 'id',
                login: 'mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: 'id',
                login: 'spavkov',
                avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/spavkov'
            },
            {
                id: 'id',
                login: 'roboblob',
                avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/roboblob'
            }                        
        ]
    };

    render() {
        return (
            <div style={userStyle}>
                {
                    this.state.users.map((user) => (
                        <UserItem key={user.login} user={user} />
                    ))
                }
            </div>
        );
    };
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}


export default Users;
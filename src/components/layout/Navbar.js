import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

        return (
            <nav className='navbar bg-primary'>
                <h1 className={props.icon}> {props.title}</h1>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>        
                    <li>
                        <Link to="/user/roboblob">roboblob</Link>
                    </li>                                  
                </ul>
            </nav>

        );
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;
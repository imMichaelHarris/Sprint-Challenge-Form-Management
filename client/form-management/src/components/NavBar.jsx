import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <header>
            <NavLink to="/">Sign Out</NavLink>
        </header>
    );
};

export default NavBar;
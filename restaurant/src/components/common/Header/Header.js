import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="row header">
            <div className="four columns">
                <h5>Restaurant</h5>
            </div>
            <ul className="eight columns">
                <NavLink className="button" to="/tables">
                    Tables
                </NavLink>
                <NavLink className="button" to="/waiters">
                    Waiters
                </NavLink>
            </ul>
        </div>
    );
}

export default Header;

import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="row header">
            <div className="four columns">
                <h5>IT-School</h5>
            </div>
            <ul className="eight columns">
                <NavLink className="button" to="/groups">
                    Groups
                </NavLink>
                <NavLink className="button" to="/students">
                    Students
                </NavLink>
            </ul>
        </div>
    );
}

export default Header;

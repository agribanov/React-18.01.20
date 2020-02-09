import React from 'react';
import PropTypes from '../propTypes';

function Header({ onAddClick }) {
    return (
        <header style={headerStyles}>
            Stickers App
            <span style={addBtnStyle} onClick={onAddClick}>
                Add new
            </span>
        </header>
    );
}

const headerStyles = {
    backgroundColor: '#282c34',
    textAlign: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
};

const addBtnStyle = {
    border: '1px solid lightgrey',
    float: 'right',
    marginRight: '40px',
    fontSize: '10px',
    cursor: 'pointer',
    padding: '1vmin'
};

Header.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default Header;

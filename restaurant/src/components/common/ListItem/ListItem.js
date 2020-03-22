import React from 'react';

function ListItem({ children }) {
    return (
        <div className="row">
            <div className="twelve columns list-item">{children}</div>
        </div>
    );
}

export default ListItem;

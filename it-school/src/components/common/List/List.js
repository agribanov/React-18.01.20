import React from 'react';

function List({ children }) {
    return (
        <div className="row">
            <div className="twelve columns list">{children}</div>
        </div>
    );
}

export default List;

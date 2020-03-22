import React from 'react';
import ListItem from '../../common/ListItem/ListItem';
import { Link, useRouteMatch } from 'react-router-dom';

function TablesListItem({ item: { id, name }, onDelete }) {
    const { url } = useRouteMatch();
    return (
        <ListItem>
            <div className="row">
                <div className="eleven columns">
                    <Link to={`${url}/${id}`}>{name}</Link>
                </div>
                <div className="one column">
                    <span onClick={() => onDelete(id)}>X</span>
                </div>
            </div>
        </ListItem>
    );
}

export default TablesListItem;

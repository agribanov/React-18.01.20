import React from 'react';
import ListItem from '../../common/ListItem/ListItem';
import { Link, useRouteMatch } from 'react-router-dom';

function StudentsListItem({
    item: { id, name, groupId },
    groupsMap,
    onDelete
}) {
    const { url } = useRouteMatch();
    return (
        <ListItem>
            <div className="row">
                <div className="six columns">
                    <Link to={`${url}/${id}`}>{name}</Link>
                </div>
                <div className="five columns">
                    {groupsMap.get(groupId).name}
                </div>
                <div className="one column">
                    <span onClick={() => onDelete(id)}>X</span>
                </div>
            </div>
        </ListItem>
    );
}

export default StudentsListItem;

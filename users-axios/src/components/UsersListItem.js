import React from 'react';

function UsersListItem({ user, onDelete, onSelect }) {
    return (
        <li onClick={() => onSelect(user.id)}>
            {user.name} {user.surname}{' '}
            <span onClick={() => onDelete(user.id)}>X</span>
        </li>
    );
}

export default UsersListItem;

import React from 'react';
import UsersListItem from './UsersListItem';

function UsersList({ users, onDelete, onSelect }) {
    return (
        <ul>
            {users.map(user => (
                <UsersListItem
                    key={user.id}
                    user={user}
                    onSelect={onSelect}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default UsersList;

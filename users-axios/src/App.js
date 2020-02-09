import React, { useState, useEffect } from 'react';
import api from './services/api';
import UsersList from './components/UsersList';
import UserForm from './components/UserForm';
function App() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        surname: '',
        email: ''
    });

    useEffect(() => {
        api.get('').then(resp => setUsers(resp.data));
    }, []);

    function onUserDelete(id) {
        api.delete(id).then(resp => {
            setUsers(users.filter(user => user.id !== resp.data.id));
        });
    }

    function onNewUserChange(changes) {
        setNewUser({
            ...newUser,
            ...changes
        });
    }

    function onNewUserSave(user) {
        if (user.id) {
            updateUser(user);
        } else {
            createUser(user);
        }
    }

    function createUser(user) {
        api.post('', user).then(resp => setUsers([...users, resp.data]));
    }

    function updateUser(user) {
        api.put(user.id, user).then(resp => {
            setUsers(
                users.map(item => (item.id === resp.data.id ? resp.data : item))
            );
        });
    }

    function onUserSelect(id) {
        const user = users.find(item => item.id === id);

        setNewUser(user);
    }

    return (
        <div>
            <UserForm
                user={newUser}
                onChange={onNewUserChange}
                onSave={onNewUserSave}
            />
            <UsersList
                users={users}
                onSelect={onUserSelect}
                onDelete={onUserDelete}
            />
        </div>
    );
}

export default App;

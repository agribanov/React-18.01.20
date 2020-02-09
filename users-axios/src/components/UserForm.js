import React from 'react';

function UserForm({ user, onChange, onSave }) {
    function onValueChange(e) {
        onChange({
            [e.target.name]: e.target.value
        });
    }

    function onFormSubmit(e) {
        e.preventDefault();

        onSave(user);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={onValueChange}
            />
            <input
                type="text"
                name="surname"
                value={user.surname}
                onChange={onValueChange}
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={onValueChange}
            />
            <button>Save</button>
        </form>
    );
}

export default UserForm;

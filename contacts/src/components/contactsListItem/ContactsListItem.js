import React, { Component } from 'react';

export class ContactsListItem extends Component {
    render() {
        const { contact } = this.props;
        return (
            <tr>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.age}</td>
                <td>{contact.phone}</td>
            </tr>
        );
    }
}

export default ContactsListItem;

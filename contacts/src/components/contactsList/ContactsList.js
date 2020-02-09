import React, { Component } from 'react';
import './ContactsList.css';

import ContactsListItem from '../contactsListItem/ContactsListItem';


export class ContactsList extends Component {
    render() {
        return (
            <table className="contacts-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts.map( contact => (
                        <ContactsListItem contact={contact} key={contact.id}></ContactsListItem>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default ContactsList

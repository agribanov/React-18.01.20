import React, { Component } from 'react';
import './ContactsList.css';

import ContactsListItem from '../contactsListItem/ContactsListItem';

export class ContactsList extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.contacts !== nextProps.contacts;
    }

    render() {
        return (
            <ul className="contacts-list">
                {this.props.contacts.map(contact => (
                    <ContactsListItem
                        contact={contact}
                        key={contact.id}
                        onSelect={this.props.onSelect}
                    ></ContactsListItem>
                ))}
            </ul>
        );
    }
}

export default ContactsList;

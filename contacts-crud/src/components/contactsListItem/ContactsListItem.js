import React, { Component } from 'react'

export class ContactsListItem extends Component {
    render() {
        const {contact} = this.props;
        return (
           <li className="contact-list-item" onClick={this.props.onSelect.bind(null, contact)}>
           {contact.name} {contact.surname}
           </li>
        )
    }
}

export default ContactsListItem

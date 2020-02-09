import React from 'react';
import './App.css';

import ContactsList from './components/contactsList/ContactsList';
import ContactForm from './components/contactForm/ContactForm';

class App extends React.Component {
    state = {
        selectedContact: this.getEmptyContact(),
        contacts: [
            {
                id: 1,
                age: 33,
                name: 'Leanne',
                surname: 'Graham',
                phone: '1-770-736-8031 x56442'
            },
            {
                id: 2,
                age: 33,
                name: 'Ervin',
                surname: 'Howell',
                phone: '010-692-6593 x09125'
            },
            {
                id: 3,
                age: 33,
                name: 'Clementine',
                surname: 'Bauch',
                phone: '1-463-123-4447'
            },
            {
                id: 4,
                age: 33,
                name: 'Patricia',
                surname: 'Lebsack',
                phone: '493-170-9623 x156'
            },
            {
                id: 5,
                age: 33,
                name: 'Chelsey',
                surname: 'Dietrich',
                phone: '(254)954-1289'
            },
            {
                id: 6,
                age: 33,
                name: 'Dennis',
                surname: 'Schulist',
                phone: '1-477-935-8478 x6430'
            },
            {
                id: 7,
                age: 33,
                name: 'Kurtis',
                surname: 'Weissnat',
                phone: '210.067.6132'
            },
            {
                id: 8,
                age: 33,
                name: 'Nicholas',
                surname: 'Runolfsdottir V',
                phone: '586.493.6943 x140'
            },
            {
                id: 9,
                age: 33,
                name: 'Glenna',
                surname: 'Reichert',
                phone: '(775)976-6794 x41206'
            },
            {
                id: 10,
                age: 33,
                name: 'Clementina',
                surname: 'DuBuque',
                phone: '024-648-3804'
            }
        ]
    };

    getEmptyContact() {
        return {
            age: 33,
            name: '',
            surname: '',
            phone: ''
        };
    }

    onAddNewBtnClick = () => {
        this.setState({
            selectedContact: this.getEmptyContact()
        });
    };

    onContactSelect = contact => {
        console.log('on select');
        this.setState({
            selectedContact: contact
        });
    };

    onDelete = contact => {
        this.setState({
            contacts: this.state.contacts.filter(el => el !== contact),
            selectedContact: this.getEmptyContact()
        });
    };

    onSave = contact => {
        if (contact.id) {
            this.updateContact(contact);
        } else {
            this.createContact(contact);
        }
    };

    createContact(contact) {
        contact.id = Date.now();
        this.setState({
            contacts: [...this.state.contacts, contact],
            selectedContact: contact
        });
    }

    updateContact(contact) {
        this.setState({
            contacts: this.state.contacts.map(el =>
                el.id === contact.id ? contact : el
            ),
            selectedContact: contact
        });
    }

    render() {
        return (
            <>
                <header className="App-header">Contacts App</header>
                <div className="left-panel">
                    <ContactsList
                        contacts={this.state.contacts}
                        onSelect={this.onContactSelect}
                    ></ContactsList>
                    <button
                        onClick={this.onAddNewBtnClick}
                        className="add-new-contact-btn"
                    >
                        Add new
                    </button>
                </div>
                <div className="right-panel">
                    <ContactForm
                        key={this.state.selectedContact.id}
                        contact={this.state.selectedContact}
                        onDelete={this.onDelete}
                        onSave={this.onSave}
                    ></ContactForm>
                </div>
            </>
        );
    }
}

export default App;

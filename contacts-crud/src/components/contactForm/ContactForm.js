import React, { Component } from 'react';

import './ContactForm.css';

export class ContactForm extends Component {
    constructor(props) {
        super(props);

        console.log('contructor');

        this.state = {
            ...props.contact
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
    }

    componentDidMount() {
        console.log('componentDidMount');

        document.addEventListener('click', this.onDocumentClick);
    }

    onDocumentClick() {
        console.log('clicked');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.aasdfasf.age !== nextState.age;
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocumentClick);

        console.log('componentWillUnmount');
    }

    onDeleteBtnClick = () => {
        this.props.onDelete(this.props.contact);
    };

    onContactFormSubmit = e => {
        e.preventDefault();
        this.props.onSave(this.state);
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        console.log('form render', this.props);
        return (
            <form
                action=""
                className="contact-form"
                onSubmit={this.onContactFormSubmit}
            >
                <h2>Contact Details</h2>
                <label htmlFor="nameInput">Name</label>
                <input
                    type="text"
                    name="name"
                    id="nameInput"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <br />

                <label htmlFor="surnameInput">Surname</label>
                <input
                    type="text"
                    name="surname"
                    id="surnameInput"
                    value={this.state.surname}
                    onChange={this.onChange}
                />
                <br />

                <label htmlFor="ageInput">Age</label>
                <input
                    type="text"
                    name="age"
                    id="ageInput"
                    value={this.state.age}
                    onChange={this.onChange}
                />
                <br />

                <label htmlFor="phoneInput">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phoneInput"
                    value={this.state.phone}
                    onChange={this.onChange}
                />

                <div className="buttons">
                    <button type="submit" className="pull-right">
                        Save
                    </button>
                    {this.state.id ? (
                        <button
                            type="button"
                            className="pull-left"
                            onClick={this.onDeleteBtnClick}
                        >
                            Delete
                        </button>
                    ) : (
                        ''
                    )}
                </div>
            </form>
        );
    }
}

export default ContactForm;

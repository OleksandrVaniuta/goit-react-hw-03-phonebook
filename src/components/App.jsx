import React, { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleFilter = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  addContact = contact => {
    this.setState(value => ({
      contacts: [contact, ...value.contacts],
    }));
  };

  onCotnactClone = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const localStoreConstacts = localStorage.getItem('contacts');
    const parsedContats = JSON.parse(localStoreConstacts);
    if (parsedContats) {
      this.setState({ contacts: parsedContats });
    }
  }

  render() {
    const { filter } = this.state;
    const visibleEl = this.visibleFilter();

    return (
      <div className={css.box}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} onClone={this.onCotnactClone} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        <ContactsList
          contactData={visibleEl}
          onDeletContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

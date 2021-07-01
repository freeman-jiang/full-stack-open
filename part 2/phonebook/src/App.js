import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import List from './components/List';
import { create, get, remove, update } from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [notificationMsg, setNotificationMsg] = useState(null);
  const [notificationType, setNotificationType] = useState('');

  const refreshList = async () => {
    setPersons(await get());
  };

  useEffect(() => {
    const getData = async () => {
      try {
        refreshList();
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = e => {
    setNewNumber(e.target.value);
  };

  const handleDelete = async id => {
    const personToBeDeleted = persons.find(person => person.id === id);
    if (window.confirm(`Delete ${personToBeDeleted.name}?`)) {
      try {
        await remove(id);
        refreshList();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (persons.some(e => e.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const personToUpdate = persons.find(person => person.name === newName);
        const newPerson = { ...personToUpdate, number: newNumber };
        try {
          await update(newPerson);

          displayMessage(newPerson, 'update');
        } catch (err) {
          console.error(err);
          displayMessage(newPerson, 'error');
        } finally {
          refreshList();
          setNewName('');
          setNewNumber('');
        }
      }
    } else {
      try {
        const newPerson = { name: newName, number: newNumber };
        const data = await create(newPerson);
        setPersons(persons.concat(data));
        displayMessage(data);
        setNewName('');
        setNewNumber('');
      } catch (err) {
        console.log(err);
        setNewName('');
        setNewNumber('');
      }
    }
  };

  const personsDisplay = searchValue
    ? persons.filter(person =>
        person.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : persons;

  const displayMessage = (person, type) => {
    if (type === 'update') {
      setNotificationMsg(`Updated ${person.name}`);
      setNotificationType('success');
    } else if (type === 'error') {
      setNotificationMsg(
        `Information concerning ${person.name} has already been removed from the server`
      );
      setNotificationType('error');
    } else {
      setNotificationMsg(`Added ${person.name}`);
      setNotificationType('success');
    }

    setTimeout(() => setNotificationMsg(null), 5000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} type={notificationType} />
      <Filter searchValue={searchValue} setSearchValue={setSearchValue} />

      <Form
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        newName={newName}
        newNumber={newNumber}
      />

      <List personsDisplay={personsDisplay} onDelete={handleDelete} />
    </div>
  );
};

export default App;

import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData(prevInputData => ({
      ...prevInputData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setContactsData(prevContactsData => [...prevContactsData, inputData]);
    console.log(contactsData);
  }

  const contacts = contactsData.map(contact => (
    <h2 key={contact.firstName}>
      {contact.firstName} {contact.lastName}
    </h2>
  ));

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='First Name'
          name='firstName'
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder='Last Name'
          name='lastName'
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button>Add contact</button>
      </form>
      {contacts}
    </div>
  );
}

export default App;

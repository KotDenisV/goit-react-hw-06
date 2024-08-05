import { useState, useEffect } from 'react'
import s from './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import contactData from '../../contacts.json'

function App() {
  return (
    <div className={s.appWrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App

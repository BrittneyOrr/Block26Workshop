import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList.jsx';
import SelectedContact from './components/SelectedContact.jsx';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
   <>
    <SelectedContact
      selectedContactId = {selectedContactId}
      setSelectedContactId = {setSelectedContactId} 
      />
     <ContactList />
   </>
  );
}
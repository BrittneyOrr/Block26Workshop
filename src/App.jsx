import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList.jsx';
import SelectedContact from './components/SelectedContact.jsx';

export default function App() {
  const [selectedContact, setSelectedContact] = useState(null)
  return (
   <>
   {selectedContact ? (
    <SelectedContact />
   ) : (
     <ContactList />
   )}
   </>
  );
}
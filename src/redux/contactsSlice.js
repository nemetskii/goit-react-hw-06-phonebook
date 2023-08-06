import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (contacts, newContact) => {
      return [...contacts, newContact.payload];
    },
    removeContact: (contacts, contactToRemove) => {
      return contacts.filter(contact => contactToRemove.payload !== contact.id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;

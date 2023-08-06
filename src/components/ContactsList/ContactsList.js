import React from 'react';
import { ContactsListItem } from './ContactListItem';

export const ContactsList = ({ contacts, onDeleteButton }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            onDeleteButton={onDeleteButton}
          />
        ))}
      </ul>
    </>
  );
};

import React, { useEffect } from 'react';
import AddContact from '../../contents/contacts/AddContact';
import EditContact from '../../contents/contacts/EditContact';
import Contacts from '../../contents/contacts/Contacts';
import contactStore from '../../stores/contactStore';

const ContactPage = () => {
  const store = contactStore();
  useEffect(() => {
    store.getContacts();
  }, []);
  return (
    <div>
      ContactPage
      <div>
        <AddContact />
        <Contacts />
      </div>
    </div>
  );
};

export default ContactPage;

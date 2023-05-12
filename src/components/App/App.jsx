import Contacts from '../Contacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    const normalaizeContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaizeContacts)
    );
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <Contacts contacts={filterContacts()} />
    </Container>
  );
};

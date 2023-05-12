import ContactsItem from '../ContactsItem';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.length !== 0 ? (
          contacts.map(({ name, id, number }) => (
            <ContactsItem key={id} name={name} id={id} number={number} />
          ))
        ) : (
          <li>No contacts found</li>
        )}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

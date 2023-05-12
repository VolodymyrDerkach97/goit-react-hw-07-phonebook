import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/';

import { DeleteButton, Contact } from './ContactsItem.styled';

const ContactsItem = ({ name, id, number }) => {
  const dispatch = useDispatch();
  return (
    <Contact>
      {name}: {number}
      <DeleteButton
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </DeleteButton>
    </Contact>
  );
};

export default ContactsItem;

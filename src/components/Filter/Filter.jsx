import { Input } from '../ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </>
  );
};

export default Filter;

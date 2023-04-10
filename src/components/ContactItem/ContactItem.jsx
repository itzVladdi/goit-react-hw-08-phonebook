// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';
import css from '../ContactList/ContactList.module.css';
import { requestDeleteContact } from 'redux/contacts/contacts.operations';

export function ContactItem() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = async contacId => {
    try {
      await dispatch(requestDeleteContact(contacId)).unwrap();
      alert(`The contact was successfully deleted!`);
    } catch (error) {
      alert(`Oops! Something went wrong... ${error}`);
    }
  };

  function getFilterContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  const filteredContacts = getFilterContacts();
  return (
    <>
      {filteredContacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => handleDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </>
  );
}

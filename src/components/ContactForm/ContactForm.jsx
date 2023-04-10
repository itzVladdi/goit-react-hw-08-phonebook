import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { requestAddContact } from 'redux/contacts/contacts.operations';

import css from './ContactForm.module.css';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputRef = useRef();
  const numberInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() ===
          nameInputRef.current.value.toLowerCase()
      )
    ) {
      return alert(`${nameInputRef.current.value} is already in contacts.`);
    }
    const newContact = {
      name: nameInputRef.current.value,
      number: numberInputRef.current.value,
    };
    dispatch(requestAddContact(newContact));

    function reset() {
      nameInputRef.current.value = '';
      numberInputRef.current.value = '';
    }
    reset();
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="Name">Name</label>
      <input
        id="Name"
        ref={nameInputRef}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="Number">Number</label>
      <input
        id="Number"
        ref={numberInputRef}
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

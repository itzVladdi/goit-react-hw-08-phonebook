import { ContactItem } from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';

export function ContactList() {
  return (
    <ul className={css.list}>
      <ContactItem />
    </ul>
  );
}

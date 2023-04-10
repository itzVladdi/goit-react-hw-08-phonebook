import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { ErrorText, MainTitle, Text } from './Contacts.styled';
import { Title } from './Login.style';
import {
  selectContacts,
  selectContactsError,
  selectContactsStatus,
  selectIsLoggedIn,
} from '../redux/selectors';

import { requestUserContacts } from '../redux/contacts/contacts.operations';

import { withAuthRedirectLogOut } from '../hoc/withAuthRedirect';

function Contacts() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const status = useSelector(selectContactsStatus);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(requestUserContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts?.length > 0 ? (
        <>
          <Filter />
          <Loader />
          {status === 'resolved' && !Boolean(error) && <ContactList />}
          {error && <ErrorText>{error}</ErrorText>}
        </>
      ) : (
        <>
          <Loader />
          {status === 'resolved' && !Boolean(error) && (
            <Text>You don't have contacts yet!</Text>
          )}
          {error && <ErrorText>{error}</ErrorText>}
        </>
      )}
    </>
  );
}

export default withAuthRedirectLogOut(Contacts, '/login');

import { useSelector, useDispatch } from 'react-redux';
import { getContactsNames } from 'redux/contactsSlice';
import { getFilteredNames } from 'redux/filterSlice';
import { remove } from 'redux/contactsSlice';
import { List, ListItem, Name, DeleteBtn, PhoneNumber } from './styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsNames);
  const queryFilter = useSelector(getFilteredNames);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(queryFilter?.toLowerCase())
  );

  const contactsForRender = queryFilter ? filteredContacts : contacts;

  return (
    <List>
      {contactsForRender.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            <Name>
              {name}: <PhoneNumber>{number}</PhoneNumber>
            </Name>
            <DeleteBtn id={id} onClick={() => dispatch(remove(id))}>
              Delete
            </DeleteBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

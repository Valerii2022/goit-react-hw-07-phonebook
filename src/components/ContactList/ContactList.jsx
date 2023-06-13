import { useSelector, useDispatch } from 'react-redux';
import { getContactsNames } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { List, ListItem, Name, PhoneNumber, DeleteBtn } from './styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContactsNames);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {items.length > 0 &&
        items.map(({ name, id, phone }) => {
          return (
            <ListItem key={id}>
              <Name>
                {name}: <PhoneNumber>{phone}</PhoneNumber>
              </Name>
              <DeleteBtn id={id}>Delete</DeleteBtn>
            </ListItem>
          );
        })}
    </List>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { getContactsNames } from 'redux/selectors';
import { Form, AddContactBtn, FormLabel, FormInput } from './styled';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsNames);
  const newContact = { name: '', phone: null };

  const handleInputChange = e => {
    if (e.target.name === 'name') newContact.name = e.target.value;
    if (e.target.name === 'number') newContact.phone = e.target.value;
  };

  const onSubmit = e => {
    e.preventDefault();
    const addedName = contacts.items.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (addedName) {
      return alert(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));

    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="[a-zA-Z]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Adrian"
          onChange={handleInputChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{3}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="000 00 00 000"
          onChange={handleInputChange}
          required
        />
      </FormLabel>
      <AddContactBtn>Add contacts</AddContactBtn>
    </Form>
  );
};
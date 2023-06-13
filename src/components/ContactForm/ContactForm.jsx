// import { useDispatch, useSelector } from 'react-redux';
// import { getContactsNames } from 'redux/selectors';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from 'redux/contactsSlice';
import { Form, AddContactBtn, FormLabel, FormInput } from './styled';

export const ContactForm = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContactsNames);

  const handleInputChange = e => {
    console.log('good');
  };

  return (
    <Form>
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
          pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="000 000 0000"
          onChange={handleInputChange}
          required
        />
      </FormLabel>
      <AddContactBtn>Add contacts</AddContactBtn>
    </Form>
  );
};

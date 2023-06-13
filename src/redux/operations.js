import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://64881a170e2469c038fcf3d6.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    const response = await axios.get('/contacts/contacts');

    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

export const addContact = () => async dispatch => {
  try {
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

export const deleteContact = () => async dispatch => {
  try {
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

import {
  PHONES_RECEIVED,
  PHONES_REQUEST,
  NEW_PHONE_CREATED,
  PHONE_CHANGED,
  PHONE_REMOVED
} from '../constants';

import history from '../history';

import {createPhones} from '../Utils'


export const phoneRequest = () => ({
  type: PHONES_REQUEST
});

export const phoneReceive = (data) => ({
  type: PHONES_RECEIVED,
  phones: data
});

export const phoneCreated = (data) => ({
  type: NEW_PHONE_CREATED,
  phone: data
});

export const changePhone = (id, data) => ({
  type: PHONE_CHANGED,
  id: id,
  data: data
});

export const removePhone = (id) => ({
  type: PHONE_REMOVED,
  id: id
});

export const getPhones = () => dispatch => {
  dispatch(phoneRequest());
  const phones = createPhones();
  dispatch(phoneReceive(phones));
};

export const saveNewPhone = (phone) => dispatch => {
  dispatch(phoneCreated(phone));
  history.push('/list')
};
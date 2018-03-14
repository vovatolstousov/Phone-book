import * as R from 'ramda';
import {
  PHONES_REQUEST,
  PHONES_RECEIVED,
  NEW_PHONE_CREATED,
  PHONE_CHANGED,
  PHONE_REMOVED
} from '../constants';

const initialState = {
  loading: false,
  phones: []
};

export default function phones(state = initialState, action) {

  switch (action.type) {

    case PHONES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case PHONES_RECEIVED: {
      return {
        ...state,
        phones: action.phones,
        loading: false
      }
    }

    case NEW_PHONE_CREATED: {
      const newPhones = R.append(action.phone, state.phones);
      return {
        ...state,
        phones: newPhones,
      }
    }

    case PHONE_REMOVED: {
      const newPhones = R.filter(x => x.id !== action.id)(state.phones);
      return {
        ...state,
        phones: newPhones,
      }
    }

    case PHONE_CHANGED: {
      const {id, data} = action;
      const newPhones = R.map(phone => {
        if (phone.id === id) {
          phone[data.name] = data.value
        }
        return phone
      })(state.phones);
      return {
        ...state,
        phones: newPhones,
      }
    }

    default: {
      return state
    }
  }
}
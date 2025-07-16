import { ContactState } from './contactTypes';
import {  ContactAction, ContactActionTypes } from './contactActions';

const initialState: ContactState = {
  user: null,
  loading: false,
  error: null,
  redirectPath: null,
};

const contactReducer = (state = initialState, action: ContactAction): ContactState => {
  switch (action.type) {
    case ContactActionTypes.CONTACT_REQUEST:
      return { ...state, loading: true, error: null };
    case ContactActionTypes.CONTACT_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case ContactActionTypes.CONTACT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ContactActionTypes.CONTACT_REDIRECT:
      return {...state, redirectPath: action.payload };
    case ContactActionTypes.CLEAR_ERROR: // Handle CLEAR_ERROR action
      return { ...state, error: null };
    default:
      return state;
  }
};

export default contactReducer;
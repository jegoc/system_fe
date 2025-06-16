import { SignUpState } from './signupTypes';
import {  SignUpAction, SignUpActionTypes } from './signupActions';

const initialState: SignUpState = {
  user: null,
  loading: false,
  error: null,
  redirectPath: null,
};

const authReducer = (state = initialState, action: SignUpAction): SignUpState => {
  switch (action.type) {
    case SignUpActionTypes.SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case SignUpActionTypes.SIGNUP_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case SignUpActionTypes.SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SignUpActionTypes.SIGNUP_REDIRECT:
      return {...state, redirectPath: action.payload };
    case SignUpActionTypes.CLEAR_ERROR: // Handle CLEAR_ERROR action
      return { ...state, error: null };
    default:
      return state;
  }
};

export default authReducer;
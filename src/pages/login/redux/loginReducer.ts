import { AuthState } from './loginTypes';
import {  AuthAction, AuthActionTypes } from './loginActions';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  redirectPath: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case AuthActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case AuthActionTypes.LOGIN_REDIRECT:
      return {...state, redirectPath: action.payload };
    case AuthActionTypes.CLEAR_ERROR: // Handle CLEAR_ERROR action
      return { ...state, error: null };
    default:
      return state;
  }
};

export default authReducer;
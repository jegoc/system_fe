import { ForgotState } from './forgotTypes';
import {  ForgotAction, ForgotActionTypes } from './forgotActions';

const initialState: ForgotState = {
  user: null,
  loading: false,
  error: null,
  redirectPath: null,
};

const authReducer = (state = initialState, action: ForgotAction): ForgotState => {
  switch (action.type) {
    case ForgotActionTypes.FORGOT_REQUEST:
      return { ...state, loading: true, error: null };
    case ForgotActionTypes.FORGOT_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case ForgotActionTypes.FORGOT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ForgotActionTypes.FORGOT_REDIRECT:
      return {...state, redirectPath: action.payload };
    case ForgotActionTypes.CLEAR_ERROR: // Handle CLEAR_ERROR action
      return { ...state, error: null };
    default:
      return state;
  }
};

export default authReducer;
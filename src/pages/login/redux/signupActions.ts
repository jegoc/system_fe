import { User } from './signupTypes';

export enum SignUpActionTypes {
    SIGNUP_REQUEST = 'SIGNUP_REQUEST',
    SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
    SIGNUP_FAILURE = 'SIGNUP_FAILURE',
    SIGNUP_REDIRECT = 'SIGNUP_REDIRECT',
    // Clear Error
    CLEAR_ERROR = "CLEAR_ERROR",
  }
  
  // Clear Error
  interface ClearErrorAction {
    type: SignUpActionTypes.CLEAR_ERROR;
  }

  interface SignUpRequestAction {
    type: SignUpActionTypes.SIGNUP_REQUEST;
    payload: User;
  }
  interface SignUpSuccessAction {
    type: SignUpActionTypes.SIGNUP_SUCCESS;
    payload: User;
  }
  interface SignUpFailureAction {
    type: SignUpActionTypes.SIGNUP_FAILURE;
    payload: string;
  }
  interface SignUpRedirectAction {
    type: SignUpActionTypes.SIGNUP_REDIRECT;
    payload: string;
  }
  
  export type SignUpAction =
    | SignUpRequestAction
    | SignUpSuccessAction
    | SignUpFailureAction
    | SignUpRedirectAction
    | ClearErrorAction;
  
  // src/store/auth/actions.ts
  export const signUpRequest = (user: User): SignUpRequestAction => ({
    type: SignUpActionTypes.SIGNUP_REQUEST,
    payload: user,
  });

  export const signUpSuccess = (user: User): SignUpSuccessAction => ({
    type: SignUpActionTypes.SIGNUP_SUCCESS,
    payload: user,
  });
  
  export const signUpFailure = (error: string): SignUpFailureAction => ({
    type: SignUpActionTypes.SIGNUP_FAILURE,
    payload: error,
  });

  export const redirect = (path: string): SignUpRedirectAction => ({
    type: SignUpActionTypes.SIGNUP_REDIRECT,
    payload: path,
  });
  

// ********* Clear Errors ****************

export const clearError = (): ClearErrorAction => ({
  type: SignUpActionTypes.CLEAR_ERROR,
});
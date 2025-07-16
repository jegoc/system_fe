import { User } from './contactTypes';

export enum ContactActionTypes {
    CONTACT_REQUEST = 'CONTACT_REQUEST',
    CONTACT_SUCCESS = 'CONTACT_SUCCESS',
    CONTACT_FAILURE = 'CONTACT_FAILURE',
    CONTACT_REDIRECT = 'CONTACT_REDIRECT',
    // Clear Error
    CLEAR_ERROR = "CLEAR_ERROR",
  }
  
  // Clear Error
  interface ClearErrorAction {
    type: ContactActionTypes.CLEAR_ERROR;
  }

  interface ContactRequestAction {
    type: ContactActionTypes.CONTACT_REQUEST;
    payload: User;
  }
  interface ContactSuccessAction {
    type: ContactActionTypes.CONTACT_SUCCESS;
    payload: User;
  }
  interface ContactFailureAction {
    type: ContactActionTypes.CONTACT_FAILURE;
    payload: string;
  }
  interface ContactRedirectAction {
    type: ContactActionTypes.CONTACT_REDIRECT;
    payload: string;
  }

  export type ContactAction =
    | ContactRequestAction
    | ContactSuccessAction
    | ContactFailureAction
    | ContactRedirectAction
    | ClearErrorAction;


  export const contactRequest = (user: User): ContactRequestAction => ({
    type: ContactActionTypes.CONTACT_REQUEST,
    payload: user,
  });

  export const contactSuccess = (user: User): ContactSuccessAction => ({
    type: ContactActionTypes.CONTACT_SUCCESS,
    payload: user,
  });

  export const contactFailure = (error: string): ContactFailureAction => ({
    type: ContactActionTypes.CONTACT_FAILURE,
    payload: error,
  });

  export const redirect = (path: string): ContactRedirectAction => ({
    type: ContactActionTypes.CONTACT_REDIRECT,
    payload: path,
  });
  

// ********* Clear Errors ****************

export const clearError = (): ClearErrorAction => ({
  type: ContactActionTypes.CLEAR_ERROR,
});
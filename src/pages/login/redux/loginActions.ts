import { User } from './loginTypes';

export enum AuthActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOGIN_REDIRECT = 'LOGIN_REDIRECT',
    // Clear Error
    CLEAR_ERROR = "CLEAR_ERROR",
  }
  
  // Clear Error
  interface ClearErrorAction {
    type: AuthActionTypes.CLEAR_ERROR;
  }

  interface LoginRequestAction {
    type: AuthActionTypes.LOGIN_REQUEST;
    payload: User;
  }
  interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS;
    payload: User;
  }
  interface LoginFailureAction {
    type: AuthActionTypes.LOGIN_FAILURE;
    payload: string;
  }
  interface LoginRedirectAction {
    type: AuthActionTypes.LOGIN_REDIRECT;
    payload: string;
  }
  
  export type AuthAction =
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailureAction
    | LoginRedirectAction
    | ClearErrorAction;
  
  // src/store/auth/actions.ts
  export const loginRequest = (user: User): LoginRequestAction => ({
    type: AuthActionTypes.LOGIN_REQUEST,
    payload: user,
  });
  
  export const loginSuccess = (user: User): LoginSuccessAction => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: user,
  });
  
  export const loginFailure = (error: string): LoginFailureAction => ({
    type: AuthActionTypes.LOGIN_FAILURE,
    payload: error,
  });

  export const redirect = (path: string): LoginRedirectAction => ({
    type: AuthActionTypes.LOGIN_REDIRECT,
    payload: path,
  });
  

// ********* Clear Errors ****************

export const clearError = (): ClearErrorAction => ({
  type: AuthActionTypes.CLEAR_ERROR,
});
import { User } from './forgotTypes';

export enum ForgotActionTypes {
    FORGOT_REQUEST = 'FORGOT_REQUEST',
    FORGOT_SUCCESS = 'FORGOT_SUCCESS',
    FORGOT_FAILURE = 'FORGOT_FAILURE',
    FORGOT_REDIRECT = 'FORGOT_REDIRECT',
    // Clear Error
    CLEAR_ERROR = "CLEAR_ERROR",
  }
  
  // Clear Error
  interface ClearErrorAction {
    type: ForgotActionTypes.CLEAR_ERROR;
  }

  interface ForgotRequestAction {
    type: ForgotActionTypes.FORGOT_REQUEST;
    payload: User;
  }
  interface ForgotSuccessAction {
    type: ForgotActionTypes.FORGOT_SUCCESS;
    payload: User;
  }
  interface ForgotFailureAction {
    type: ForgotActionTypes.FORGOT_FAILURE;
    payload: string;
  }
  interface ForgotRedirectAction {
    type: ForgotActionTypes.FORGOT_REDIRECT;
    payload: string;
  }

  export type ForgotAction =
    | ForgotRequestAction
    | ForgotSuccessAction
    | ForgotFailureAction
    | ForgotRedirectAction
    | ClearErrorAction;
  
    
  export const forgotRequest = (user: User): ForgotRequestAction => ({
    type: ForgotActionTypes.FORGOT_REQUEST,
    payload: user,
  });

  export const forgotSuccess = (user: User): ForgotSuccessAction => ({
    type: ForgotActionTypes.FORGOT_SUCCESS,
    payload: user,
  });

  export const forgotFailure = (error: string): ForgotFailureAction => ({
    type: ForgotActionTypes.FORGOT_FAILURE,
    payload: error,
  });

  export const redirect = (path: string): ForgotRedirectAction => ({
    type: ForgotActionTypes.FORGOT_REDIRECT,
    payload: path,
  });
  

// ********* Clear Errors ****************

export const clearError = (): ClearErrorAction => ({
  type: ForgotActionTypes.CLEAR_ERROR,
});
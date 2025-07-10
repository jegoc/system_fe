import { User } from './feedbackTypes';

export enum FeedbackActionTypes {
    FEEDBACK_REQUEST = 'FEEDBACK_REQUEST',
    FEEDBACK_SUCCESS = 'FEEDBACK_SUCCESS',
    FEEDBACK_FAILURE = 'FEEDBACK_FAILURE',
    FEEDBACK_REDIRECT = 'FEEDBACK_REDIRECT',
    // Clear Error
    CLEAR_ERROR = "CLEAR_ERROR",
  }
  
  // Clear Error
  interface ClearErrorAction {
    type: FeedbackActionTypes.CLEAR_ERROR;
  }

  interface FeedbackRequestAction {
    type: FeedbackActionTypes.FEEDBACK_REQUEST;
    payload: User;
  }
  interface FeedbackSuccessAction {
    type: FeedbackActionTypes.FEEDBACK_SUCCESS;
    payload: User;
  }
  interface FeedbackFailureAction {
    type: FeedbackActionTypes.FEEDBACK_FAILURE;
    payload: string;
  }
  interface FeedbackRedirectAction {
    type: FeedbackActionTypes.FEEDBACK_REDIRECT;
    payload: string;
  }

  export type FeedbackAction =
    | FeedbackRequestAction
    | FeedbackSuccessAction
    | FeedbackFailureAction
    | FeedbackRedirectAction
    | ClearErrorAction;
  
    
  export const feedbackRequest = (user: User): FeedbackRequestAction => ({
    type: FeedbackActionTypes.FEEDBACK_REQUEST,
    payload: user,
  });

  export const feedbackSuccess = (user: User): FeedbackSuccessAction => ({
    type: FeedbackActionTypes.FEEDBACK_SUCCESS,
    payload: user,
  });

  export const feedbackFailure = (error: string): FeedbackFailureAction => ({
    type: FeedbackActionTypes.FEEDBACK_FAILURE,
    payload: error,
  });

  export const redirect = (path: string): FeedbackRedirectAction => ({
    type: FeedbackActionTypes.FEEDBACK_REDIRECT,
    payload: path,
  });
  

// ********* Clear Errors ****************

export const clearError = (): ClearErrorAction => ({
  type: FeedbackActionTypes.CLEAR_ERROR,
});
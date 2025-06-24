import { FeedbackState } from './feedbackTypes';
import {  FeedbackAction, FeedbackActionTypes } from './feedbackActions';

const initialState: FeedbackState = {
  user: null,
  loading: false,
  error: null,
  redirectPath: null,
};

const authReducer = (state = initialState, action: FeedbackAction): FeedbackState => {
  switch (action.type) {
    case FeedbackActionTypes.FEEDBACK_REQUEST:
      return { ...state, loading: true, error: null };
    case FeedbackActionTypes.FEEDBACK_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case FeedbackActionTypes.FEEDBACK_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FeedbackActionTypes.FEEDBACK_REDIRECT:
      return {...state, redirectPath: action.payload };
    case FeedbackActionTypes.CLEAR_ERROR: // Handle CLEAR_ERROR action
      return { ...state, error: null };
    default:
      return state;
  }
};

export default authReducer;
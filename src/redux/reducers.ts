// src/redux/rootReducer.ts
import { combineReducers } from 'redux';

//admin

// user
import loginReducer from '../pages/login/redux/loginReducer';
import forgotReducer from '../pages/login/redux/forgotReducer';
import signUpReducer from '../pages/login/redux/signupReducer';
import feedbackReducer from '../pages/common/redux/feedbackReducer';

const rootReducer = combineReducers({
  // admin
  // user
  LoginReducer: loginReducer,
  SignUpReducer: signUpReducer,
  ForgotReducer: forgotReducer,
  FeedbackReducer: feedbackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// src/redux/sagas.ts
import { all, fork } from 'redux-saga/effects';

//admin
// user
import loginSaga from '../pages/login/redux/loginSaga';
import signUpSaga from '../pages/login/redux/signupSaga';
import forgotSaga from '../pages/login/redux/forgotSaga';
import feedbackSaga from '../pages/common/redux/feedbackSaga';
import contactSaga from '../pages/common/redux/contactSaga';

function* rootSaga() {
  yield all([
    // admin
    // user
    fork(loginSaga),
    fork(forgotSaga),
    fork(signUpSaga),
    fork(feedbackSaga),
    fork(contactSaga),
  ]);
}

export default rootSaga;

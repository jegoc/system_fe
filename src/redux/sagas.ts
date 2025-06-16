// src/redux/sagas.ts
import { all, fork } from 'redux-saga/effects';

//admin
// user
import loginSaga from '../pages/login/redux/loginSaga';
import signUpSaga from '../pages/login/redux/signupSaga';

function* rootSaga() {
  yield all([
    // admin
    // user
    fork(loginSaga),
    fork(signUpSaga),
  ]);
}

export default rootSaga;

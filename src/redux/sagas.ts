// src/redux/sagas.ts
import { all, fork } from 'redux-saga/effects';

//admin
// user
import loginSaga from '../pages/login/redux/loginSaga';

function* rootSaga() {
  yield all([
    // admin
    // user
    fork(loginSaga),
  ]);
}

export default rootSaga;

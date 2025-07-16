// src/store/auth/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { 
  ContactActionTypes, 
  contactSuccess, 
  contactFailure, 
  redirect,
} from './contactActions';
import apiUrl from '../../../components/apiurl';
import axios from 'axios';

function* contact(action: any): Generator<any, void, AxiosResponse> {
  try {
    const account = action.payload;
    const response: AxiosResponse = yield call(axios.post, `${apiUrl.url}feedback`, account);
    const user = response.data;
    
      if(user!='') {
        yield put(contactSuccess(user));
      }else{
        yield put(contactFailure('failed'));
      }
  } catch (error) {
    const errorMessage = (error as any).message; 
    yield put(contactFailure(errorMessage));
  }
}

function* watchContact() {
  yield takeLatest(ContactActionTypes.CONTACT_REQUEST, contact);
}

export default watchContact;

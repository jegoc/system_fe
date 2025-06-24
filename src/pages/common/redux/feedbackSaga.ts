// src/store/auth/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { 
  FeedbackActionTypes, 
  feedbackSuccess, 
  feedbackFailure, 
  redirect,
} from './feedbackActions';
import apiUrl from '../../../components/apiurl';
import axios from 'axios';

function* feedback(action: any): Generator<any, void, AxiosResponse> {
  try {
    const account = action.payload;
    const response: AxiosResponse = yield call(axios.post, `${apiUrl.url}feedback`, account);
    const user = response.data;
    
      if(user!='') {
        yield put(feedbackSuccess(user));
      }else{
        yield put(feedbackFailure('failed'));
      }
  } catch (error) {
    const errorMessage = (error as any).message; 
    yield put(feedbackFailure(errorMessage));
  }
}

function* watchFeedback() {
  yield takeLatest(FeedbackActionTypes.FEEDBACK_REQUEST, feedback);
}

export default watchFeedback;

// src/store/auth/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { 
  AuthActionTypes, 
  loginSuccess, 
  loginFailure, 
  redirect,
} from './loginActions';
import apiUrl from '../../../components/apiurl';
import axios from 'axios';
import { setLocalStorageVariable } from '../../../components/localStorage';


function* login(action: any): Generator<any, void, AxiosResponse> {
    const formatDate = (date: Date): string => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
      const day = date.getDate().toString().padStart(2, '0');

      return `${year}-${month}-${day}`;
    };

  try {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    const { email, password, otp } = action.payload;
    const response: AxiosResponse = yield call(axios.post, `${apiUrl.url}login`, { email, password, otp });
    const user = response.data;

    console.log('User:', user);

      if(user!='') {
            yield put(redirect('/login_otp'));
            yield put(loginSuccess(user));

            setLocalStorageVariable('loginEmail', email);
            setLocalStorageVariable('tempuserId', user.id);
            // setLocalStorageVariable('tempuserAuth', user.auth);
            // setLocalStorageVariable('tempavatar', user.avatar);
            // setLocalStorageVariable('temptoken', user.token);
            // setLocalStorageVariable('temploginDate', formattedDate);

              const response: AxiosResponse = yield call(axios.post, `${apiUrl.url}send_email_no_token`, {
                to: action.payload.email,
                subject: 'OTP Verification',
                html: `
                  <div style="background-color: rgb(243,243,243); padding: 30px;">
                    <div style="font-family:Arial, Helvetica, sans-serif; font-size: 14px; border: 1px solid #d1d1d1; border-radius: 20px;">
                      <div style="background: linear-gradient(to top left, #000000, #4681b8); padding: 5px; border: none; text-align: center;  border-radius: 20px 20px 0px 0px;">
                      <a href="https://pearsportal.com" target="_blank"><img src="https://pearsportal.com/logo.png" style="width:100px; height:100px" /></a>
                      </div>
                      <div style="padding: 30px; background-color: #FFF; border-radius: 0px 0px 20px 20px;">
                      Hi ${action.payload.email},
                      <br/>
                      <br/>
                        Never share your OTP. Keep your code safe. <br/>Your OTP is : <b> ${action.payload.otp}</b><br/>
                        This is valid for 3 minutes.<br/><br/>
                        If this is not you please contact the system administrator immediately.<br/>
                        Please give us some feedback to improve the system.<br/>Thank you.
                        <br/><br/>
                        Best regards,<br/>
                        Pears Portal - Application Team
                      </div>
                    </div>
                  </div>`,
              });

              if (response.status === 200) {
                console.log('Email sent successfully');
              } else {
                console.error('Failed to send email');
              }
      }else{
        yield put(loginFailure('failed'));
      }
  } catch (error) {
    const errorMessage = (error as any).message; 
    yield put(loginFailure(errorMessage));
  }
}


function* watchLogin() {
  yield takeLatest(AuthActionTypes.LOGIN_REQUEST, login);
}

export default watchLogin;

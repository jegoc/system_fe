// src/redux/rootReducer.ts
import { combineReducers } from 'redux';

//admin
// import admin_loginReducer from '../pages/admin/login/redux/loginReducer';
// import admin_createUserReducer from '../pages/admin/user/redux/adminUserReducer';
// import admin_settingsReducer from '../pages/admin/settings/redux/adminSettingsReducer';
// import admin_headersReducer from '../pages/admin/headers/redux/adminHeadersReducer';
// import admin_associationReducer from '../pages/admin/association/redux/adminAssociationReducer';
// import admin_waterReducer from '../pages/admin/water/redux/adminWaterReducer';
// import admin_paymentReducer from '../pages/admin/payment/redux/adminPaymentReducer';

// user
import loginReducer from '../pages/login/redux/loginReducer';
import signUpReducer from '../pages/login/redux/signupReducer';

const rootReducer = combineReducers({
  // admin
  // user
  LoginReducer: loginReducer,
  SignUpReducer: signUpReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux'; 
// import saga from './redux/sagas'
// // import { applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// // import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducers from './redux/reducers';

// // const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
// const sagaMiddleware = createSagaMiddleware();

// // const store = configureStore({
// //   reducer: rootReducers,
// //   middleware: [sagaMiddleware], // Add middleware like sagaMiddleware here
// //   devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
// // });
// const store = configureStore({
//   reducer: rootReducers,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(sagaMiddleware), // ✅ correct way
//   devTools: process.env.NODE_ENV !== 'production',
// });


// sagaMiddleware.run(saga);

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // ⬅️ Import the centralized store

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

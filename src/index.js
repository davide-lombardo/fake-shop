import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store'
import { Provider } from 'react-redux'

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from 'firebase/compat/app';
import "firebase/auth";


// const fbConfig = {}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
}

// Initialize firebase instance
//firebase.initializeApp(fbConfig)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <App />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



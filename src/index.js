import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";

// Initialize Firebase for rececing cloud messaging notification
var config = {
  apiKey: "AIzaSyDINaK58bQmZheEjRbjxwBnpmAuvFnigBM",
  authDomain: "speech-to-text-236211.firebaseapp.com",
  databaseURL: "https://speech-to-text-236211.firebaseio.com",
  projectId: "speech-to-text-236211",
  storageBucket: "",
  messagingSenderId: "190734931135"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

// A template firebase-messaging-sw.js is in public folder.
// When user app is not in focus or closed. Service worker will handle all the background messaging.

// Request user permission to receive notifications
messaging.requestPermission().then(async () => {
  console.log('Notification permission granted.');
  // Get device registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  // The token is used to identify the physical devices, so serverside can send notification
  // to specific devices.
  const token = await messaging.getToken();
  console.log('Copy paste the Registration token below to serverside cloud function for testing:')
  console.log(`%c${token}`, `color:orange; background:grey`)
}).catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});

// When application is in focus, instead of notification from service worker, it will be handled here.
messaging.onMessage(payload => {
  console.log('message', payload)
})


// All the other react crap
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

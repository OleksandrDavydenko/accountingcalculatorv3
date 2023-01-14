import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


firebase.initializeApp({
    apiKey: "AIzaSyCpbN4fAnsI1dQ-aAjiKZG7D7EAj1S8lxg",
    authDomain: "uabuhcalculator.firebaseapp.com",
    databaseURL: "https://uabuhcalculator-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uabuhcalculator",
    storageBucket: "uabuhcalculator.appspot.com",
    messagingSenderId: "578236225932",
    appId: "1:578236225932:web:0a13edd9897c3e3edddea9",
    measurementId: "G-QY3HH1BJFH"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

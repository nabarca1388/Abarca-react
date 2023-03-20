import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVmTOoKRUh7QIQR3Zb4ypez9VCkpwIDXA",
  authDomain: "abarca-project.firebaseapp.com",
  projectId: "abarca-project",
  storageBucket: "abarca-project.appspot.com",
  messagingSenderId: "449086854709",
  appId: "1:449086854709:web:ecacf276f3eaaa870ec37c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






ReactDOM.render(
  <App />,
  document.getElementById('root')
);

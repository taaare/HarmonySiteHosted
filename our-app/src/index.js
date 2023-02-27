import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

var firebaseConfig = {
  apiKey: "AIzaSyAoJjrsmcfoCkB-Q446yhlvYH_NUm3uNvQ",
  authDomain: "harmony-firebase-e0c11.firebaseapp.com",
  databaseURL: "https://harmony-firebase-e0c11-default-rtdb.firebaseio.com/",
  projectId: "harmony-firebase-e0c11",
  storageBucket: "harmony-firebase-e0c11.appspot.com",
  messagingSenderId: "799614847534",
  appId: "1:799614847534:web:a23afc2a1c48b37d8d2dbf",
  measurementId: "G-289XZWRDQQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const database = getDatabase(app);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


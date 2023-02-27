import React, {useEffect, useState} from "react";
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, remove, update} from "firebase/database";
import { db } from "./firebase";
import { uid } from "uid";
import '../../src/styles/'
import discussionForm from './DiscussionsForm';

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
const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);
const dbRef = ref(db, 'discussions');

export default function Form() {
    return (
        <div>
            <h1>Discussions</h1>
            <discussionsForm/>
            <discussionsList/>
        </div>
    )
}
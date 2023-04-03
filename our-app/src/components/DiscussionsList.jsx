/*
NOTE:
This is the code for how an individual thread link (with edit and delete) is rendered in the list of threads.
*/

import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link, useLocation, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, remove, update} from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import app from '../firebase.js';
import styles from '../styles/discussions.module.css';
import Sidebar from "./sidebar";
import Discussion from "./Discussion";

//Edit
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
const db = getDatabase(app);
const dbRef = ref(db, 'discussions');

export default function DiscussionsList({ discussion }) {
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState([]);
    
    const deleteDiscussion = () => {
        const discussionRef = ref(db, `discussions/${discussion.id}`);
        remove(discussionRef);
    };

    const handleUpdate = () => {
        const uuid = uuidv4();
        setIsEdit(true);
        setTempUuid(discussion.uuid);
    };

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const writeToDatabase = () => {
        const uuid = uuidv4();
        const discussionRef = ref(db, `discussions/${discussion.id}`);
        set(discussionRef, {
            title,
            comments,
            uuid,
        });
        setIsEdit(false);
    };

    return (
        <>
        <div>
            <div className={styles.discussionsLink}><Link to={`discussion/${discussion.id}`}>{discussion.title}</Link></div>
            <div className={styles.inputButton}>
                <button onClick={deleteDiscussion}>Delete</button>
                {isEdit ? (
                    <>
                        <input type="text" align="center" onChange={handleOnChange} value={title}/>
                        <button onClick={writeToDatabase}>Submit Changes</button>
                        <button onClick={() => setIsEdit(false)}>Cancel Changes</button>
                    </>
                ) : (
                    <button onClick={handleUpdate}>Edit</button>
                )}
            </div>
        </div>
        </>
    )
}
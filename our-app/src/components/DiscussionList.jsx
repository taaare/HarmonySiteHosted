/*
NOTE:
This is the code for how an individual comment is rendered in an individual discussion page.
*/

import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, remove, update, child, get} from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import app from '../firebase.js';
import styles from '../styles/discussions.module.css';
import Sidebar from "./sidebar";

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

export default function DiscussionList({ discussion, index }) {
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const content = useState('');
    const discussionRef = child(dbRef, `/${discussion.id}/comments[${index}]`);
    console.log("Message");
    console.log(child(dbRef, `/${discussion.id}/comments`).snapshot.val());
    
    const deleteComment = () => {
        const commentsRef = child(dbRef, `/${discussion.id}/comments`);
        remove(commentsRef);
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
        const commentsRef = ref(db, `discussions/${discussion.id}`);
        set(commentsRef, {
            title,
            comments : [
                content,
            ],
            complete: false,
        });
        setIsEdit(false);
    };

    return (
        <>
        <div>
            <div className={styles.discussionsLink}>{comments[index]}</div>
            <button onClick={deleteComment}>Delete</button>
            {isEdit ? (
                <>
                    <input type="text" align="center" onChange={handleOnChange} value={content}/>
                    <button onClick={writeToDatabase}>Submit Changes</button>
                    <button onClick={() => setIsEdit(false)}>Cancel Changes</button>
                </>
            ) : (
                <button onClick={handleUpdate}>Edit</button>
            )}
        </div>
        </>
    )
}
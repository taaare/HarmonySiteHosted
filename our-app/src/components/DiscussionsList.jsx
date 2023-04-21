import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Link, useLocation, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, remove, update, child} from "firebase/database";
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
const userRef = ref(db, 'users');
const courseRef = ref(db, 'courses');

export default function DiscussionsList({ discussion }) {
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState();
    const [comments, setComments] = useState([]);
    const [isAuthor, setIsAuthor] = useState(false);
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '0');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || '0');
    const [userIsTeacher, setUserIsTeacher] = useState(localStorage.getItem('userIsTeacher') === 'true');

    const location = useLocation();
    const course = location.state && location.state.course;

    const idsToUse = window.location.href.split("/");
    const courseid = idsToUse[idsToUse.indexOf("discussions")+1];

    const newDiscussionsRef = ref(db, `courses/${courseid}/discussions`);

    useEffect(() => {
        onValue(child(newDiscussionsRef, `/${discussion.id}/comments`),(snapshot)=>{
            try {
                setComments(snapshotToArray(snapshot));
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    useEffect(() => {
        if (discussion.author === userEmail) {
            setIsAuthor(true);
        }
    }, []);

    const snapshotToArray = snapshot => {
        var returnArr = [];

        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            returnArr.push(item);
        });

        return returnArr;
    };
    
    const deleteDiscussion = () => {
        const discussionRef = ref(db, `courses/${courseid}/discussions/${discussion.id}`);
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
        const discussionRef = ref(db, `courses/${courseid}/discussions/${discussion.id}`);
        set(discussionRef, {
            title,
            comments,
            author: discussion.author,
            date: discussion.date,
            uuid,
        });
        setIsEdit(false);
    };

    return (
        <>
        <br></br>
        <div className={styles.discussionSurround}>
            <div className={styles.discussionsLink}><Link to={`discussion/${discussion.id}`} className={styles.discussionsLink}>{discussion.title}</Link></div>
            <div className={styles.discussionsSubtitle}>By {discussion.author}</div>
            <div className={styles.discussionsSubtitle}>Created on: {discussion.date}</div>
            {isAuthor ? (
                <>
                    <div className={styles.editAndDeleteButton}>
                        <button onClick={deleteDiscussion} className={styles.updateButton}>Delete</button>
                        &emsp;
                        {isEdit ? (
                            <>
                                <div className={styles.inputDiv}>
                                    <input className={styles.inputText} type="text" placeholder="Enter updated title" align="center" onChange={handleOnChange} value={title}/>
                                </div>
                                <button onClick={writeToDatabase} className={styles.updateButton}>Submit Changes</button>
                                &emsp;
                                <button onClick={() => setIsEdit(false)} className={styles.updateButton}>Cancel Changes</button>
                            </>
                        ) : (
                            <button onClick={handleUpdate} className={styles.updateButton}>Edit</button>
                        )}
                    </div>
                </>
            ) : (
                userIsTeacher ? (
                    <>
                        <div className={styles.editAndDeleteButton}>
                            <button onClick={deleteDiscussion} className={styles.updateButton}>Delete</button>
                        </div>
                    </>
                ) : (
                    <>
                    </>
                )
            )}
        </div>
        <br></br>
        </>
    )
}
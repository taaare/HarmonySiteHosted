/*
NOTE:
This is the page for an individual discussion.
You will be able to edit and delete comments from here,
but you can't edit the title or delete the thread itself from within a discussion.
*/

import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, remove, update, child, get} from "firebase/database";
import { Link, useLocation, BrowserRouter as Router, Route, Routes, useParams, useSearchParams} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/discussions.module.css';
import app from '../firebase.js';
import DiscussionsList from './DiscussionsList';
import DiscussionList from './DiscussionList';
import Sidebar from "./sidebar";

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
const dbRef = ref(db, `discussions`);

export default function Discussion() {
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [tempUuid, setTempUuid] = useState("");
    const [discussionList, setDiscussionList] = useState();
    const location = useLocation();
    const [discussion, setDiscussion] = useState([]);
    const discussionid = window.location.href.split("/").pop();
    const discussionRef = child(dbRef, `/${discussionid}`);
    const [isEdit, setIsEdit] = useState(false);

    const getDiscussion = () => {
        get(child(dbRef, `/${discussionid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val().title);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    getDiscussion();

    const getComment = (index) => {
        get(child(dbRef, `/${discussionid}/comments/${index}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Snapshot val for comments[" + index + "]: " + snapshot.val());
            } else {
                console.log("No comment available");
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    getComment(0);

    const handleOnChange = (e) => {
        setComment(e.target.value);
    };

    //create
    const createComment = () => {
        const uuid = uuidv4();

        comments.push(comment);

        set(ref(db, `discussions/${discussionid}`), {
            title: discussion.title,
            comments: comments,
            uuid
        });
        //will have discussions + courseCode, can get that via importing it each time, or passing it down from the course page
    };

    //read
    useEffect(() => {
        onValue(child(dbRef, `/${discussionid}`),(snapshot)=>{
            try {
                const discussion = snapshot.val();
                setDiscussion(discussion);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    const deleteComment = (index) => {
        const commentsRef = child(dbRef, `/${discussionid}/comments/${index}`);
        remove(commentsRef);
    };
    
    const handleUpdate = () => {
        const uuid = uuidv4();
        setIsEdit(true);
        setTempUuid(discussion.uuid);
    };

    const writeToDatabase = () => {
        const uuid = uuidv4();
        const commentsRef = ref(db, `discussions/${discussion.id}`);
        set(ref(db, `discussions/${discussionid}`), {
            title: discussion.title,
            comments: comments,
            uuid
        });
        setIsEdit(false);
    };

    return (
        <>
        <div>
            <header>
                <div className={styles.brand}>Discussions</div>
                <div className={styles.search} align="right">
                    <div>
                        <input type="text" name="q" placeholder="search"></input>
                        <button><i className={styles.search}></i></button>
                    </div>
                </div>
                <div className={styles.navigate} align="center">
                    <span><Link to={`/discussions`}>Home</Link> <Link to={``}>{discussion.title}</Link></span>
                </div>
            </header>
            <div>
                {comments.map((comment, index) => (
                    <>
                        <div className={styles.discussionsLink}>{comment}</div>
                        <div className={styles.inputButton}>
                            <button onClick={deleteComment(index)}>Delete</button>
                            {isEdit ? (
                                <>
                                    <input type="text" align="center" onChange={handleOnChange} value={comment}/>
                                    <button onClick={writeToDatabase}>Submit Changes</button>
                                    <button onClick={() => setIsEdit(false)}>Cancel Changes</button>
                                </>
                            ) : (
                                <button onClick={handleUpdate}>Edit</button>
                            )}
                        </div>
                    </>
                ))}
            </div>
            <div>
                <div className={styles.inputText}>
                    <input type="text" onChange={handleOnChange} value={comment}/>
                </div>
                <div className={styles.inputButton}>
                    <button onClick={createComment}>Add Comment</button>
                </div>
            </div>
        </div>
        </>
    )
}
import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { Link, useLocation, BrowserRouter as Router, Route, Routes, useParams, useSearchParams} from "react-router-dom";
import { getDatabase, ref, set, onValue, push, remove, update} from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/discussions.module.css';
import app from '../firebase.js';
import DiscussionsList from './DiscussionsList';
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
const dbRef = ref(db, 'discussions');
const userRef = ref(db, 'users');
const courseRef = ref(db, 'courses');

const Discussions = () => {
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState();
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState();
    const [discussionList, setDiscussionList] = useState();
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '0');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || '0');
    const [userIsTeacher, setUserIsTeacher] = useState(localStorage.getItem('userIsTeacher') === 'true');
    const [course, setCourse] = useState();
    const [courseTitle, setCourseTitle] = useState("");

    const idsToUse = window.location.href.split("/");
    const courseid = idsToUse[idsToUse.indexOf("discussions")+1];

    const newDiscussionsRef = ref(db, `courses/${courseid}/discussions`);

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    //create
    const createDiscussion = () => {
        const uuid = uuidv4();

        let index = discussionList.length+1;

        onValue(newDiscussionsRef,(snapshot)=>{
            try {
                const discussions = snapshot.val();
                for (let id in discussions) {
                    if (Number(id) === index) {
                        index = index + 1;
                    }
                }
            } catch (e) {
                console.log(e);
            }
        });

        let today = new Date().toISOString().slice(0,10);

        set(ref(db, `courses/${courseid}/discussions/${index}`), {
            title,
            comments: [],
            author: userEmail,
            date: today,
            uuid: uuid,
        });
    };

    //read
    useEffect(() => {
        onValue(newDiscussionsRef,(snapshot)=>{
            try {
                const discussions = snapshot.val();
                const discussionList = [];
                for (let id in discussions) {
                    discussionList.push({id, ...discussions[id]});
                }
                setDiscussionList(discussionList);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    useEffect(() => {
        onValue(ref(db, `courses/${courseid}`),(snapshot)=>{
            try {
                const course = snapshot.val();
                setCourse(course);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    useEffect(() => {
        onValue(ref(db, `courses/${courseid}/courseName`),(snapshot)=>{
            try {
                const courseTitle = snapshot.val();
                setCourseTitle(courseTitle);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);
    
    return (
        <>
        <div>
            <div className={styles.brand}>{courseTitle} Discussions</div>
            <div className={styles.navigate} align="center">
                <span><Link to={`/coursepage/${courseid}`}>{courseTitle}</Link> - <Link to={`/discussions/${courseid}`}>Discussions</Link></span>
            </div>
            <div>
                {discussionList ? discussionList.map((discussion, index) => <DiscussionsList discussion={discussion} key={index}/>) : ''}
            </div>
            <div>
                <div className={styles.inputText}>
                    <input type="text" align="center" onChange={handleOnChange} value={title}/>
                </div>
                <div className={styles.inputButton}>
                    <button onClick={createDiscussion}>Create Discussion</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Discussions;
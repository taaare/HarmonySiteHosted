import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, remove, update, child, get} from "firebase/database";
import { Link, useLocation, BrowserRouter as Router, Route, Routes, useParams, useSearchParams} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/discussions.module.css';
import app from '../firebase.js';
import DiscussionsList from './DiscussionsList';
import DiscussionList from "./DiscussionList";
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
const userRef = ref(db, 'users');
const courseRef = ref(db, 'courses');

const Discussion = (props) => {
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [tempUuid, setTempUuid] = useState("");
    const [discussionList, setDiscussionList] = useState();
    const location = useLocation();
    const [discussion, setDiscussion] = useState([]);
    const [commentsList, setCommentsList] = useState([]);
    const [commentTitle, setCommentTitle] = useState("");
    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentDate, setCommentDate] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [updatedComment, setUpdatedComment] = useState('');
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '0');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || '0');
    const [userIsTeacher, setUserIsTeacher] = useState(localStorage.getItem('userIsTeacher') === 'true');
    const [courseTitle, setCourseTitle] = useState("");

    const course = location.state && location.state.course;

    const coursePath = `/coursepage/${props.courseCode}`;
    const course2 = props.course;

    const idsToUse = window.location.href.split("/");
    const courseid = idsToUse[idsToUse.indexOf("discussions")+1];
    const discussionid = idsToUse[idsToUse.indexOf("discussion")+1];

    const newDiscussionsRef = ref(db, `courses/${courseid}/discussions`);

    const handleOnChange = (e) => {
        setCommentTitle(e.target.value);
    };

    //create
    const createComment = () => {
        const uuid = uuidv4();
        let index = commentsList.length+1;

        onValue(child(newDiscussionsRef, `/${discussionid}/comments`),(snapshot)=>{
            try {
                const comments = snapshot.val();
                for (let id in comments) {
                    if (Number(id) === index) {
                        index = index + 1;
                    }
                }
            } catch (e) {
                console.log(e);
            }
        });

        let today = new Date().toISOString().slice(0,10);

        set(ref(db, `courses/${courseid}/discussions/${discussionid}/comments/${index}`), {
            title: commentTitle,
            author: userEmail,
            date: today,
        });
    };

    const snapshotToArray = snapshot => {
        var returnArr = [];

        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            returnArr.push(item);
        });

        return returnArr;
    };

    //read
    useEffect(() => {
        onValue(child(newDiscussionsRef, `/${discussionid}`),(snapshot)=>{
            try {
                const discussion = snapshot.val();
                setDiscussion(discussion);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    useEffect(() => {
        onValue(child(newDiscussionsRef, `/${discussionid}/comments`),(snapshot)=>{
            try {
                const comments2 = snapshot.val();
                const commentsList = [];
                for (let id in comments2) {
                    commentsList.push({id, ...comments2[id]});
                }
                setCommentsList(commentsList);
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
            <header>
                <div className={styles.brand}>{courseTitle} Discussions</div>
                <div className={styles.navigate} align="center">
                    <span><Link to={coursePath} state={{course}} className={styles.navBarLink}>{courseTitle}</Link> - <Link to={`/discussions/${courseid}`} className={styles.navBarLink}>Discussions</Link> - <Link to={``} className={styles.navBarLink}>{discussion.title}</Link></span>
                </div>
            </header>
            <div>
                {commentsList?.map((comment, index) => <DiscussionList comment={comment} key={index}/>)}
            </div>
            <div className={styles.inputDiv}>
                <input className={styles.inputText} type="text" placeholder="Enter comment" onChange={handleOnChange} value={commentTitle}/>
            </div>
            <div className={styles.inputButtonDiv}>
                <button className={styles.inputButton} onClick={createComment}>Add Comment</button>
            </div>
        </div>
        </>
    )
}

export default Discussion;
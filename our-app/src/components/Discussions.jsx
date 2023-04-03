/*
NOTE:
This is the page for the whole list of threads, with links you can click on.
You will have the ability to edit the titles, and delete entire threads from here, but not comments.
*/

import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { Link, useLocation, BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
//Could loop through every discussion, if it contains course code, then would import it
//Maybe inside discussions collection, have course code?

const Discussions = () => {
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState();
    const [discussionList, setDiscussionList] = useState();

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    //create
    const createDiscussion = () => {
        const uuid = uuidv4();

        set(ref(db, 'discussions/' + uuid), {
            title,
            comments: [],
            uuid: uuid,
        });
        //will have discussions + courseCode, can get that via importing it each time, or passing it down from the course page
    };

    //read
    useEffect(() => {
        onValue(dbRef,(snapshot)=>{
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
    
        return (
            <>
            
            <div>
                <div className={styles.brand}>Discussions</div>
                <div className={styles.search} align="right">
                    <div>
                        <input type="text" name="q" placeholder="search"></input>
                        <button className={styles.search}><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className={styles.navigate} align="center">
                    <span><Link to={`/discussions`}>Home</Link></span>
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

                <div className={styles.pagination} align="center">
                    pages: <a href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">5</a>
                </div>
            </div>
            </>
        )
}

export default Discussions;
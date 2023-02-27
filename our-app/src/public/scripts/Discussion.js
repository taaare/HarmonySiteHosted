import React, {useEffect, useState} from "react";
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, remove, update} from "firebase/database";
import { db } from "./firebase";
import { uid } from "uid";
import '../../src/styles/'

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

export default function Discussion({ discussion }) {
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState([]);
    
    const deleteDiscussion = () => {
        const discussionRef = firebase.database().ref('dicussions').child(discussion.id);
        discussionRef.remove();
    };
    
    const handleUpdate = () => {
        const uuid = uid();
        setIsEdit(true);
        setTempUuid(discussion.uuid);
    }

    const writeToDatabase = () => {
        const uuid = uid();
        set(ref(db, '/${uuid}'), {
            title,
            comments,
            complete: false,
        });
    }

    return (
        <div>
            <h1>{discussion.title}</h1>
            <button onClick={deleteDiscussion}>Delete</button>
            {isEdit ? (
                <>
                    <button onClick={writeToDatabase}>Submit Changes</button>
                    <button onClick={() => setIsEdit(false)}>Cancel Changes</button>
                </>
            ) : (
                <button onClick={handleUpdate}>Edit</button>
            )}
        </div>
    )
}
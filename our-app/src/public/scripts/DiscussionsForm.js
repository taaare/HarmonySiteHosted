import React, {useEffect, useState} from 'react';
import { getDatabase, ref, set, onValue, push, remove, update} from "firebase/database";
import { db } from "./firebase";
import firebase from '../util/firebase';

//create
export default function discussionsForm() {
    const [title, setTitle] = useState('');
    const [comments, setComments] = useState([]);

    const handleOnChange = (e) => {
        setTitle(e.target.value);
        setComments(e.target.value);
    };
    
    const createDiscussion = () => {
        const discussionRef = firebase.database().ref('discussions');
        const dicussion = {
            title,
            comments,
            complete: false,
        };

        discussionRef.push(discussion);
    };

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title}/>
            <button onClick={createDiscussion}>Create Discussion</button>
        </div>
    )
}
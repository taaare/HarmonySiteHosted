import React, {useEffect, useState} from 'react';
import { getDatabase, ref, set, onValue, push, remove, update} from "firebase/database";
import { db } from "./firebase";
import firebase from '../util/firebase';

//read
export default function discussionsForm() {
    const [discussionList, setDicussionList] = useState();
    
    useEffect(() => {
        const discussionRef = firebase.database().ref('discussions');
        discussionRef.on("value",(snapshot)=>{
            const discussions = snapshot.val();
            const discussionList = []
            for (let id in discussions) {
                discussionList.push({id,...discussions[id]});
            }
            setDiscussionList(discussionList);
        });
    }, [])
    
    return (
        <div>
            {discussionList ? discussionList.map((discussion, index) => <Discussion discussion={discussion} key={index}/>) : ''}
        </div>
    )
}
import React, {useEffect, useState} from "react";
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, remove, update} from "firebase/database";
import { db } from "./firebase";
import { uid } from "uid";

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
const dbRef = ref(db, 'discussions/' + discussionID);

/*
const Posts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const post = db.collection("discussions").onSnapshot((querySnapshot) => {});
            querySnapshot.forEach(doc => {
                getPostsFromFirebase.push({...doc.data(), key: doc.id,});
            });
            setPosts(getPostsFromFirebase);
            setLoading(false);
        return () => post();
    }, []);

    if (loading) {
        return <h1>loading from firebase...</h1>
    }

    return (
        <div>
            <h1>Posts:</h1>
            {posts.length > 0 ? (
                posts.map((post) => <div key={post.key}>{post.answer}</div>)

            ) : <h1>No discussions yet.</h1>}
        </div>
    );
};

export default Posts;

const submitDiscussion = document.querySelector("createThread");

function writeDiscussion() {
    var threadname = document.querySelector('.threadname');
    var threadcontent = document.querySelector('.threadcontent');
    set(dbRef, {
        title: threadname.value,
        author: author,
        date: Date.now(),
        content: threadcontent.value,
        comments: [
            {
                author: author,
                date: Date.now(),
                content: threadcontent.value
            }
        ]
    });
    threadname.value = '';
    threadcontent.value = '';
}

onValue(content, (snapshot) => {
    const data = snapshot.val();
    updateContent(postElement, data);
});
*/

function CRUD() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");
    const handleTodoChange = (e) => {
        setTodo(e.target.value)
    }

    //read
    useEffect(() => {
        onValue(ref(db), snapshot => {
            setTodos([]);
            const data = snapshot.val();
            if(data !== null) {
                Object.values(data).map(todo => {
                    setTodos(oldArray => [...oldArray, todo]);
                });
            }
        })
    }, [])

    //write
    const writeToDatabase = () => {
        const uuid = uid()
        set(ref(db, '/${uuid}'), {
            todo: todo,
            uuid: uuid,
            complete: false,
        });

        setTodo("");
    };

    //update
    const handleUpdate = (todo) => {
        setIsEdit(true);
        setTempUuid(todo.uuid);
        setTodo(todo.todo);
    };

    const handleSubmitChange = (todo) => {
        handleUpdate(ref(db, '/${tempUuid'), {
            todo,
            uuid: tempUuid,
        })

        setTodo("");
        setIsEdit(false);
    };

    //delete
    const handleDelete = (todo) => {
        remove(ref(db, '/${todo.uuid}'));
    }

    return (
        <div className="App">
            <input type="text" value={todo} onChange={handleTodoChange}></input>
            {isEdit ? (
                <>
                    <button onClick={handleSubmitChange}>Submit Changes</button>
                    <button onClick={() => {
                        setIsEdit(false);
                        setTodo("");
                    }}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <button onClick={writeToDatabase}>Submit</button>
            )}
            {todos.map(todo => (
                <>
                    <h1>{todo.todo}</h1>
                    <button onClick={() => handleUpdate(todo)}>Update</button>
                    <button onClick={() => handleDelete(todo)}>Delete</button>
                </>
            ))}
        </div>
    );
}

export default CRUD;

/*
export default createDiscussion;

if(submitDiscussion) {
    submitDiscussion.addEventListener('click',(event) => {
    event.preventDefault();
    //writeCourse();
    window.history.go(-1)
    // window.location.reload();
    });
}
*/
import React, {useEffect, useState} from 'react';
import '../styles/gradebook.css';
import Sidebar from './sidebar.jsx';
import { useForm } from 'react-hook-form';
import firebase from '../firebase.js';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set, onValue, push} from "firebase/database";


const EditGrade = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const courses = firebase.database().ref('courses/');
    var courseList = [];
    var courseIDs = [];

    //grabs values of courseNames from firebase
    function getCourseNames() {
        courses.on('value', (snapshot) => {
            const data = snapshot.val();
            for (let id in data) {
                courseList.push(data[id].courseName);
                courseIDs.push(id);
                //console.log(id);
            }
        });
    }

    getCourseNames();

    handleGradeChange = (event, studentId, assignmentId) => {
        const { grades } = this.state;
        const newGrade = event.target.value;
        grades[studentId] = grades[studentId] || {};
        grades[studentId][assignmentId] = newGrade;
        this.setState({ grades });
    };

    return (
    <>
        <Sidebar/>
        <div className="tempBody">
            <div className="container">
                <div className="innerbg">
                    <h1 id="myh1">Gradebook</h1>
                    
                    
                </div>
            </div>
        </div>
    </>
  );
};

export default EditGrade;
import React, {useEffect, useState} from 'react';
import '../styles/coursecreate.css';
import Sidebar from './sidebar.jsx';
import { useForm } from 'react-hook-form';
import app from '../firebase.js';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set, onValue, push} from "firebase/database";



const CreateGrade = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const database = getDatabase(app);
    const courses = ref(database, 'courses');

    var courseList = [];
    var courseIDs = [];

    //grabs values of courseNames from firebase
    function getCourseNames() {
        onValue(courses, (snapshot) => {
          const data = snapshot.val();
          for (let id in data) {
            courseList.push(data[id].courseName);
            courseIDs.push(id);
            // console.log(id);
          }
        });
      }
    
    getCourseNames();

    const onSubmit = (data) => {
      let assignment = document.getElementById("assignment-name").value;
      let courseName = document.getElementById("class-name").value;
    
      for (var i = 0; i < courseList.length; i++) {
        if (courseList[i] === courseName) {
          const database = getDatabase(app);
          const assignmentRef = ref(database, 'courses/' + courseIDs[i] + '/assignments/' + assignment);
          set(assignmentRef, data);
          alert("Assignment created successfully");
        } else {
          alert("Course does not exist");
        }
      }
    };

    return (
    <>
        <Sidebar/>
        <div className="tempBody">
            <div className="container">
                <div className="innerbg">
                    <h1 id="myh1">Create Assignment</h1>
                    
                    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="assignmentName" className="inputheader">Assignment Name</label><br />
                            <input id="assignment-name" type="text" placeholder="Homework 1" {...register("assignmentName", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="maxPoints" className="inputheader">Max Points</label><br />
                            <input id="max-points" type="text" placeholder="100" {...register("maxPoints", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="dueDate" className="inputheader">Due Date</label><br />
                            <input id="end-time" type="date" {...register("dueDate", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="class" className="inputheader">Class Name</label><br />
                            <input id="class-name" type="text" {...register("className", { required: true })} />
                        </div>
                        <div className="center">
                            <button type="submit" className="button submit-form">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default CreateGrade;
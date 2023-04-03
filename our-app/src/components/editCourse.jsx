import React from 'react';
import '../styles/coursecreate.css';
import Sidebar from './sidebar.jsx';
import { useForm } from 'react-hook-form';
import { getDatabase } from "firebase/database";
import { ref, set, update } from 'firebase/database';
import app from '../firebase.js';
import {useNavigate, useLocation} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const EditClass = (props, {updateUser}) => {

    

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const location = useLocation();

    const course = location.state && location.state.course;

    // Might use a subset of the uuid as course code to join courses
    const onSubmit = (data) => {
        
        
        let courseCode = course.courseCode;

        const database = getDatabase(app);

        data.courseCode = courseCode;

        set(ref(database, 'courses/' + courseCode), data);

        navigate('/teachercourses');

        alert("Course Successfully Edited");
       
      };

    return (
    <>
        <div className="tempBody">
            <div className="container">
                <div className="innerbg">
                    <h1 id="myh1">Edit Class</h1>
                    
                    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="courseName" className="inputheader">Class Name</label><br />
                            <input className="class-name" type="text" placeholder="BIO 112" {...register("courseName", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="instructorName" className="inputheader">Instructor</label><br />
                            <input className="instructor-name" type="text" placeholder="James H. Long" {...register("instructorName", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="scheduledDays" className="inputheader">Scheduled Days</label><br />
                            <input className="scheduled-days" type="text" placeholder="T-TH" {...register("scheduledDays", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="startDate" className="inputheader">Start Date</label><br />
                            <input className="start-date" type="date" {...register("startDate", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="inputheader">End Date</label><br />
                            <input className="end-date" type="date" {...register("endDate", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="startTime" className="inputheader">Start Time</label><br />
                            <input className="start-time" type="time" {...register("startTime", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="endTime" className="inputheader">End Time</label><br />
                            <input className="end-time" type="time" {...register("endTime", { required: true })} />
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

export default EditClass;
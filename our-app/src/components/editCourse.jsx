import React, {useState} from 'react';
import styles from '../styles/coursecreate.module.css';
import { useForm } from 'react-hook-form';
import { getDatabase } from "firebase/database";
import { ref, set, update } from 'firebase/database';
import app from '../firebase.js';
import {useNavigate, useLocation} from 'react-router-dom';
import Popup from './popup.jsx';

const EditClass = (props, {updateUser}) => {

    

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const location = useLocation();

    const course = location.state && location.state.course;
    
    const [isOpen, setIsOpen] = useState(false);

    // Might use a subset of the uuid as course code to join courses
    const onSubmit = (data) => {
        
        
        let courseCode = course.courseCode;

        const database = getDatabase(app);

        data.courseCode = courseCode;

        set(ref(database, 'courses/' + courseCode), data);

        setIsOpen(true);
       
      };

      const handleClose = () => {
        setIsOpen(false);
        navigate('/teachercourses');
      };

    return (
    <>
        <div className={styles.tempBody}>
            <div className={styles.container}>
                <div className={styles.innerbg}>
                {isOpen && <Popup message={"Course Successfully Edited."} isOpen={isOpen} onClose={handleClose}/>}
                    <h1 id="myh1">Edit Class</h1>
                    
                    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="courseName" className={styles.inputheader}>Class Name</label><br />
                            <input className="class-name" type="text" defaultValue={course.courseName} {...register("courseName", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="instructorName" className={styles.inputheader}>Instructor</label><br />
                            <input className="instructor-name" type="text" defaultValue={course.instructorName} {...register("instructorName", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="scheduledDays" className={styles.inputheader}>Scheduled Days</label><br />
                            <input className="scheduled-days" type="text" defaultValue={course.scheduledDays} {...register("scheduledDays", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="startDate" className={styles.inputheader}>Start Date</label><br />
                            <input className="start-date" type="date" defaultValue={course.startDate} {...register("startDate", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="endDate" className={styles.inputheader}>End Date</label><br />
                            <input className="end-date" type="date" defaultValue={course.endDate} {...register("endDate", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="startTime" className={styles.inputheader}>Start Time</label><br />
                            <input className="start-time" type="time" defaultValue={course.startTime} {...register("startTime", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="endTime" className={styles.inputheader}>End Time</label><br />
                            <input className="end-time" type="time" defaultValue={course.endTime} {...register("endTime", { required: true })} />
                        </div>
                        <div className={styles.center}>
                            <button type="submit" className={styles.button}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default EditClass;
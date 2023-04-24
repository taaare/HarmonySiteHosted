import React, {useState} from 'react';
import styles from '../styles/coursecreate.module.css';
import Sidebar from './sidebar.jsx';
import { useForm } from 'react-hook-form';
import { getDatabase } from "firebase/database";
import { ref, set, update } from 'firebase/database';
import app from '../firebase.js';
import {useNavigate} from 'react-router-dom';
import Popup from './popup.jsx';

const CreateClass = ({user, updateUser}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    // Might use a subset of the uuid as course code to join courses
    const onSubmit = (data) => {
        
        
        let courseCode = Math.random().toString(36).substr(2, 6).toUpperCase();

        const database = getDatabase(app);

        data.courseCode = courseCode;

        set(ref(database, 'courses/' + courseCode), data);

        saveToUser(courseCode);
        
        setIsOpen(true);
       
        // firebase.database().ref('courses/' + courseCode).set(data); old implementation
      };

      const saveToUser = (courseCode)=> {
        const database = getDatabase(app);
        const userRef = ref(database, 'users/' + user.uid);

        const tempCourses = user.courses || [];

        tempCourses.push(courseCode);

        update(userRef, {
            courses: tempCourses,
          }).catch((error) => {
            console.error(error);
          });

          var tempUser = {...user};

          tempUser.courses = tempCourses;
      
          updateUser(tempUser);

      };

      

      const handleClose = () => {
        setIsOpen(false);
        navigate('/courses');
      };

    return (
    <>
        <div className={styles.tempBody}>
            <div className={styles.container}>
                <div className={styles.innerbg}>
                    
                    {isOpen && <Popup message={"Course Successfully Created."} isOpen={isOpen} onClose={handleClose}/>}
                   
                    <h1 id="myh1">Create Class</h1>
                    
                    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="courseName" className={styles.inputheader}>Class Name</label><br />
                            <input className="class-name" type="text" placeholder="BIO 112" {...register("courseName", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="instructorName" className={styles.inputheader}>Instructor</label><br />
                            <input className="instructor-name" type="text" placeholder="James H. Long" {...register("instructorName", { required: true })} />
                        </div>

                        <div>
                            <label htmlFor="startDate" className={styles.inputheader}>Start Date</label><br />
                            <input className="start-date" type="date" {...register("startDate", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="endDate" className={styles.inputheader}>End Date</label><br />
                            <input className="end-date" type="date" {...register("endDate", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="startTime" className={styles.inputheader}>Start Time</label><br />
                            <input className="start-time" type="time" {...register("startTime", { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="endTime" className={styles.inputheader}>End Time</label><br />
                            <input className="end-time" type="time" {...register("endTime", { required: true })} />
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

export default CreateClass;
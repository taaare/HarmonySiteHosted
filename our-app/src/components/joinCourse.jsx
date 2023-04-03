import React from 'react';
import styles from '../styles/joinCourse.module.css';
import { useForm } from 'react-hook-form';
import { getDatabase } from "firebase/database";
import { ref, set, update } from 'firebase/database';
import app from '../firebase.js';
import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const JoinClass = (props) => {



    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    // Might use a subset of the uuid as course code to join courses
    const onSubmit = (data) => {
        
        const database = getDatabase(app);
        
        const courseCode = data.courseCode;



        saveToUser(courseCode);

        navigate('/teachercourses');

        alert("Course Successfully Joined");
       
      };

      const saveToUser = (courseCode)=> {
        const database = getDatabase(app);
        const userRef = ref(database, 'users/' + props.user.uid);

        const tempCourses = props.user.courses || []; //if no courses, then empty array to avoid error

        tempCourses.push(courseCode);

        update(userRef, {
            courses: tempCourses,
          }).catch((error) => {
            console.error(error);
          });

      };

    return (
    <>
        <div className={styles.tempBody}>
            <div className={styles.container}>
                <div className={styles.innerbg}>
                    <h1 className={styles.boldy} >Join Class</h1>
                    <form className={styles.formStyle} onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="courseCode" className={styles.inputheader}>Course Code</label><br />
                            <input className="class-name" type="text" placeholder="8GH6F5" maxLength="6" {...register("courseCode", { required: true })} />
                        </div>
                        <div className={styles.center}>
                            <button type="submit" className="button submit-form">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default JoinClass;
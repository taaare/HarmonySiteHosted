import React, { useState } from 'react';
import styles from '../styles/joinCourse.module.css';
import { useForm } from 'react-hook-form';
import { getDatabase } from "firebase/database";
import { ref, set, update, onValue } from 'firebase/database';
import app from '../firebase.js';
import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Popup from './popup.jsx';

const JoinClass = ({user, updateUser}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [isCMOpen, setIsCMOpen] = useState(false);
   
    const [courseCreated, setCourseCreated] = useState(false);

    const [courseExists, setCourseExists] = useState(true);

    // Might use a subset of the uuid as course code to join courses
    const onSubmit = (data) => {
        
        const database = getDatabase(app);
        
        const courseCode = data.courseCode;

        saveToUser(courseCode);
       
      };

      const saveToUser = (courseCode) => {
        const database = getDatabase(app);
        const userRef = ref(database, 'users/' + user.uid);
        const coursesRef = ref(database, 'courses/' + courseCode);

        const tempCourses = user.courses || []; //if no courses, then empty array to avoid error

        var alreadyJoined = false;
        var validCourse = false;

        onValue(coursesRef, (snapshot) => { // individual course


            if(snapshot.exists()) {
                validCourse = true;
            }

            tempCourses.forEach((course) => {

                if(course === courseCode){
                    alreadyJoined = true;
                }
            });
    
            if(!alreadyJoined && validCourse){
                tempCourses.push(courseCode);
                update(userRef, {
                    courses: tempCourses,
                }).catch((error) => {
                    console.error(error);
                });
    
                var tempUser = {...user};
    
                tempUser.courses = tempCourses;
            
                updateUser(tempUser);
    
                setCourseCreated(true);
    
                setIsCMOpen(true);
    
                //alert("Course Successfully Joined");
            } else if(validCourse === false) {
                setCourseExists(validCourse);
                validCourse = true;
            } else {
                alreadyJoined = false; // resetting variable
                setIsOpen(true);
            }
            }, (error) => {
                console.error(error);
            });
        


      };

      const handleClose = () => {
        setIsOpen(false);
        setCourseExists(true);
      };

      const handleCloseCourseCreated = () => {

        setIsOpen(false);

        navigate('/courses');
      };

    return (
    <>
        <div className={styles.tempBody}>
            <div className={styles.container}>
                <div className={styles.innerbg}>
                    {isOpen && <Popup message={"Already Joined Course! Try Again."} isOpen={isOpen} onClose={handleClose}/>}
                    {!courseExists && <Popup message={"Course Doesn't Exist! Try Again."} isOpen={!courseExists} onClose={handleClose}/>}
                    {courseCreated && <Popup message={"Course Successfully Joined"} isOpen={isCMOpen} onClose={handleCloseCourseCreated}/>}
                    <h1 className={styles.boldy} >Join Class</h1>
                    <form className={styles.formStyle} onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="courseCode" className={styles.inputheader}>Course Code</label><br />
                            <input className="class-name" type="text" placeholder="8GH6F5" maxLength="6" {...register("courseCode", { required: true })} />
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

export default JoinClass;
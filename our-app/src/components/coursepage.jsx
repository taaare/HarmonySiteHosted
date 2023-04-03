import React from 'react';
import { getDatabase, ref, set } from "firebase/database";
import app from '../firebase.js';
import styles from '../styles/coursepage.module.css';
import { useLocation, Link } from 'react-router-dom';


const CoursePage = (props) => {

        const location = useLocation();

        const course = location.state && location.state.course;
    

        return (
            <>
                <div>
                    <div className={styles.container}>
                        <div className={styles.innerbg}>
                            <div className={styles.topbar}>
                            
                            <Link to="/gradebook" className={styles.linkText}>Gradebook</Link>

                            {
                                (props.user.isTeacher) ? (
                                    <Link to="/editcourse" state={{course}} className={styles.linkText}>Edit Course</Link>
                                ) : <Link to="/account" className={styles.linkText}>Account</Link>
                            }

                            <Link to="/discussions" className={styles.linkText}>Discussions</Link>


                            </div>
                            <h1>{course.courseName}</h1>
                            <div className={styles.box}>
                                <div className={styles.labelbox}>Due Soon</div>
                            </div> 
                            <div className={styles.box}>
                                <div className={styles.labelbox}>Recent Grades</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </>
    );
};

export default CoursePage;
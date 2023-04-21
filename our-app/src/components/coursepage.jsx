import React from 'react';
import { getDatabase, ref, set, get, update, remove} from "firebase/database";
import app from '../firebase.js';
import styles from '../styles/coursepage.module.css';
import { useLocation, Link } from 'react-router-dom';


const CoursePage = ({user, updateUser}) => {
        const location = useLocation();

        const course = location.state && location.state.course;

        const leaveCourse = () => {

            const database = getDatabase(app);

            const userRef = ref(database, 'users/' + user.uid);

            get(userRef).then((snapshot) => {

                if (snapshot.exists()) {
                  const tempUser = snapshot.val();

                  const tempCourses = tempUser.courses.filter(element => element !== course.courseCode);  // created new array without course
        
                    tempUser.courses = tempCourses;

                    update(userRef, {
                        courses: tempCourses,
                    }).catch((error) => {
                        console.error(error);
                    });
                    
                    tempUser.uid = user.uid;
                
                    // console.log(tempUser);
                  updateUser(tempUser);
                }
              });

        };

        const deleteCourse = () => {

            const database = getDatabase(app);

            const coursesRef = ref(database, 'courses/' + course.courseCode);
            
            remove(coursesRef).then(() => {
                
              console.log("Course successfully deleted");

            }).catch((error) => {
              console.error(error);
            });

        };

        return (
            <>
                <div>
                    <div className={styles.container}>
                        <div className={styles.innerbg}>
                            <div className={styles.topbar}>
                            
                            <Link to="/gradebook" className={styles.linkText}>Gradebook</Link>

                            {
                                (user.isTeacher) ? (
                                    <>
                                        <Link to="/editcourse" state={{course}} className={styles.linkText}>Edit Course</Link>
                                        <Link to="/teachercourses" onClick={() => { deleteCourse(); leaveCourse();}} className={styles.linkText}>Delete Course</Link>
                                    </>
                                ) : <>
                                        <Link to="/account" className={styles.linkText}>Account</Link>
                                        <Link to="/teachercourses" onClick={leaveCourse} className={styles.linkText}>Leave Course</Link>
                                    </>
                            }

                            <Link to={`/discussions/${course.courseCode}`} className={styles.linkText}>Discussions</Link>
                            

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
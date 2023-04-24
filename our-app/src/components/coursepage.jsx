import React, {useState, useEffect} from 'react';
import { getDatabase, ref, set, get, update, remove} from "firebase/database";
import app from '../firebase.js';
import styles from '../styles/coursepage.module.css';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Popup from './popup.jsx';


const CoursePage = ({user, updateUser}) => {
        
        const navigate = useNavigate();

        const location = useLocation();

        const course = location.state && location.state.course;
        
        const [isLeaveOpen, setIsLeaveOpen] = useState(false);
        
        const [isDeleteOpen, setIsDeleteOpen] = useState(false);

        const [recentAssignments, setRecentAssignments] = useState([]);

        useEffect(() => {
            const database = getDatabase(app);

            const coursesRef = ref(database, 'courses/' + course.courseCode);

            get(coursesRef).then((snapshot) => {

                if(snapshot.exists()) {
                    const tempCourse = snapshot.val();
                    
                    if(tempCourse.assignments) {
                        
                        const assignments = Object.values(tempCourse.assignments);
    
                        setRecentAssignments(assignments.slice(-3));
                    }
                }
              });

          }, []);

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

                    setIsLeaveOpen(true);
                
                    // console.log(tempUser);
                  updateUser(tempUser);
                }
              });

        };

        const deleteCourse = () => {

            const database = getDatabase(app);

            const coursesRef = ref(database, 'courses/' + course.courseCode);
            
            remove(coursesRef).then(() => {
                

              setIsDeleteOpen(true);

              leaveCourse();

            }).catch((error) => {
              console.error(error);
            });

        };

        const handleDelete = () => {
            setIsDeleteOpen(false);
            navigate('/courses');
          };

          const handleLeave = () => {
            setIsLeaveOpen(false);
            navigate('/courses');
          };

        return (
            <>
                <div>
                    <div className={styles.container}>
                        <div className={styles.innerbg}>
                        {isLeaveOpen && <Popup message={"Course Successfully Left!"} isOpen={isLeaveOpen} onClose={handleLeave}/>}
                        {isDeleteOpen && <Popup message={"Course Successfully Deleted!"} isOpen={isDeleteOpen} onClose={handleDelete}/>}
                            <div className={styles.topbar}>
                            
                            <Link to="/gradebook" className={styles.linkText}>Gradebook</Link>
                            
                            <Link to={`/discussions/${course.courseCode}`} className={styles.linkText}>Discussions</Link>
                            {
                                (user.isTeacher) ? (
                                    <>
                                        <Link to="/editcourse" state={{course}} className={styles.linkText}>Edit Course</Link>
                                        <div style={{ cursor: 'pointer', userSelect: 'none' }} onClick={deleteCourse} className={styles.linkText}>Delete Course</div>
                                    </>
                                ) : <>
                                        <Link to="/account" className={styles.linkText}>Account</Link>
                                        <div style={{ cursor: 'pointer', userSelect: 'none' }} onClick={leaveCourse} className={styles.linkText}>Leave Course</div>
                                    </>
                            }

                        
                            

                            </div>
                            <h1>{course.courseName}</h1>
                            <div className={styles.box}>
                                <div className={styles.labelbox}>Recent Assignments</div>
                                
                                {
                                (recentAssignments.length !== 0) ? (
                                    
                                    <ul>
                                    {recentAssignments.map((assignment, index) => (
                                        <li key={index} className={styles.assignmenttext}>
                                        {assignment.assignmentName}
                                        </li>
                                    ))}
                                    </ul>
                                
                                ) : <h1>No Assignments Here!</h1>
                                }
                                
                            </div> 

                        </div>
                    </div>
                </div>
            </>
    );
};

export default CoursePage;
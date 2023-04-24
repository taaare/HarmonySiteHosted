import React, { useEffect, useState } from 'react';
import '../styles/gradebook.css';
import Sidebar from './sidebar.jsx';
import { useForm } from 'react-hook-form';
import app from '../firebase.js';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set, get, onValue, push } from 'firebase/database';

const Gradebook = (props) => {

  const [grades, setGrades] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [userCourses, setUserCourses] = useState([]);

  const database = getDatabase(app);
  

  // Fetch courses
  //todo - fetch only courses that the user is enrolled in
  useEffect(() => {
    const coursesRef = ref(database, 'courses');
    onValue(coursesRef, (snapshot) => {
      const data = snapshot.val();
      const courseList = Object.entries(data).map(([id, courseData]) => ({
        id,
        ...courseData,
      }));
      setCourses(courseList);
    });
  }, []);

  useEffect(() => {
    // Fetch all courses
    const coursesRef = ref(database, 'courses');
    const userCoursesRef = ref(database, `users/${props.user.uid}/courses`); // Add the correct path to the user's courses
  
    // Fetch user's enrolled courses
    onValue(userCoursesRef, async (snapshot) => {
      const data = snapshot.val() || {};
      const enrolledCourseIds = Object.values(data); // Use Object.values instead of Object.keys
  
      // Fetch corresponding course details for each enrolled course
      const fetchedUserCourses = await Promise.all(
        enrolledCourseIds.map(async (courseId) => {
          const courseSnapshot = await get(ref(database, `courses/${courseId}`));
          return {
            id: courseId,
            ...courseSnapshot.val(),
          };
        }),
      );
  
      setUserCourses(fetchedUserCourses);
    });
  
    // Fetch all course data
    onValue(coursesRef, (snapshot) => {
      const data = snapshot.val();
      const courseList = Object.entries(data).map(([id, courseData]) => ({
        id,
        ...courseData,
      }));
      setCourses(courseList);
    });
  }, []);
  
  useEffect(() => {
    const coursesRef = ref(database, 'courses');
    onValue(coursesRef, (snapshot) => {
      const data = snapshot.val();
      const courseList = Object.entries(data).map(([id, courseData]) => ({
        id,
        ...courseData,
      }));
      setCourses(courseList);
    });
  }, []);

  // Fetch assignments for a specific course
  const fetchAssignmentsForCourse = async (courseId) => {
    const assignmentRef = ref(database, `courses/${courseId}/assignments`);
    const snapshot = await get(assignmentRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const assignmentsList = Object.entries(data).map(([userId, assignmentData]) => ({
        userId,
        ...assignmentData,
      }));
      return assignmentsList;
    } else {
      console.log('No assignments data available');
      return [];
    }
  };

  useEffect(() => {
    if (selectedCourse) {
      fetchAssignmentsForCourse(selectedCourse).then((assignmentsList) => setAssignments(assignmentsList));
    } else {
        setAssignments([]);
    }
  }, [selectedCourse]);

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="innerbg">
          <h1>Gradebook</h1>
          <select id="gradeDropdown" value={selectedCourse} onChange={handleCourseChange}>
            <option value="">Select a class to view</option>
            {userCourses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.courseName}
              </option>
            ))}
          </select>
          <br/><br/><br/>
          {assignments.map((assignment, index) => (
            <div key={index} className="gradeSlide">
              <div className="assignment">{assignment.assignmentName}</div>
              <div className="grade">{assignment?.grades?.[props.user.uid] ?? ''} / {assignment.maxPoints}</div>
              <br/><br/><br/><br/><br/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gradebook;

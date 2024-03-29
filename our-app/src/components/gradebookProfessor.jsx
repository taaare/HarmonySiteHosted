import React, {useEffect, useState} from 'react';
import '../styles/gradebook.css';
import Sidebar from './sidebar.jsx';
import { useForm } from 'react-hook-form';
import firebase from '../firebase.js';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set, onValue, push, update } from "firebase/database";
import { Link } from 'react-router-dom';


const GradeEditor = (props) => {
  
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [statusMessage, setStatusMessage] = useState(''); 
  const [userUid, setUserUid] = useState(''); 

  useEffect(() => {
    // Fetch classes and users from the database
    const database = getDatabase();
    const classesRef = ref(database, 'courses');
    const usersRef = ref(database, 'users');

    onValue(classesRef, (snapshot) => {
      const data = snapshot.val();
      const classList = Object.values(data);
      setClasses(classList);
    });

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const userList = Object.entries(data).map(([key, userData]) => ({ key, ...userData }));
      setUsers(userList);
    });
  }, []);

  useEffect(() => {
    if (selectedClass && selectedUser) {
      const database = getDatabase();
      const assignmentsRef = ref(database, `courses/${selectedClass}/assignments`);

      onValue(assignmentsRef, (snapshot) => {
        const data = snapshot.val();
        const assignmentList = Object.values(data);
        setAssignments(assignmentList);
      });
    } else {
      setAssignments([]);
    }
  }, [selectedClass, selectedUser]);
  
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
    users.forEach((u) => {
      if (e.target.value === u.email) {
        setUserUid(u.key);
      }
    });
  };

  const handleSubmit = () => {
    const database = getDatabase();
    const updates = {};
  
    assignments.forEach((assignment, index) => {
      const gradeInput = document.getElementsByClassName('grade2')[index];
      const grade = gradeInput.value.trim() || gradeInput.placeholder;
      updates[`courses/${selectedClass}/assignments/${assignment.assignmentName}/grades/${userUid}`] = grade;
    });
  
    update(ref(database), updates)
      .then(() => {
        console.log('Grades updated successfully');
        setStatusMessage('Successful'); // Update status message
      })
      .catch((error) => {
        console.error('Error updating grades:', error);
        setStatusMessage('Unsuccessful'); // Update status message
      });
  };

  const renderAssignments = () => {
    return assignments.map((assignment) => (
      <div key={assignment.assignmentName} className="gradeSlide">
        <div className="assignment">{assignment.assignmentName}</div>
        <div className="grade">
          <input
            type="text"
            className="grade2"
            defaultValue={assignment.grade || ''}
            placeholder={assignment?.grades?.[userUid] ?? ''}
          />
          / {assignment.maxPoints}
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="innerbg">
        <h1>Gradebook Professor Editor</h1>
        <Link to="/creategrade">
          <button id="add">Add Assignment</button>
        </Link>
        <select id="classSelect" value={selectedClass} onChange={handleClassChange}>
          <option  value="">Select a class</option>
          {classes.map((c, index) => (
            <option key={index} value={c.courseCode}>
              {c.courseName}
            </option>
          ))}
        </select>
        <select id="userSelect"value={selectedUser} onChange={handleUserChange}>
          <option value="">Select a user</option>
          {users.map((u, index) => (
            <option key={index} value={u.uid}>
              {u.email}
            </option>
          ))}
        </select>
        <button id="update" onClick={handleSubmit}>
          Submit Grades
        </button>
        <span id="statusMessage"> {statusMessage} </span>
        <br/><br/><br/>
        {renderAssignments()}
      </div>
    </div>
  );
};

export default GradeEditor;
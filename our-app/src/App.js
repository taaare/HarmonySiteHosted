import React, { useState } from 'react';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import Account from './components/Account.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import CreateClass from './components/coursecreate.jsx';
import JoinClass from './components/joinCourse.jsx';
import EditClass from './components/editCourse.jsx';
import TeacherCourses from './components/teachercourses.jsx';
import Sidebar from './components/sidebar.jsx'
import CreateGrade from './components/gradebookCreate.jsx'
import Discussions from './components/Discussions.jsx';
import DiscussionsList from './components/DiscussionsList.jsx';
import Discussion from './components/Discussion.jsx';
import DiscussionList from './components/DiscussionList.jsx';
import Gradebook from './components/gradebook.jsx';
import GradeEditor from './components/gradebookProfessor.jsx';
import CoursePage from './components/coursepage.jsx';
import LandingPage from './components/LandingPage.jsx';


function App() {

  const [userEmail, setUserEmail] = useState( localStorage.getItem('userEmail') || '0');

  const updateUserEmail = (newEmail) => {

    setUserEmail(newEmail);
    localStorage.setItem('userEmail', userEmail);
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || '0');

  const updateUser = (newUser) => {

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const [userIsTeacher, setUserIsTeacher] = useState(localStorage.getItem('userIsTeacher') === 'true');

  const updateUserIsTeacher = (isTeacher) => {
    setUserIsTeacher(isTeacher);
    localStorage.setItem('userIsTeacher', isTeacher);
  };


  return (
    <div>

      <AuthContextProvider>

      {userEmail != '0' && window.location.pathname !== "/" && <Sidebar userEmail={userEmail} />}
      
       <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = '/signin' element = {<Signin updateUserEmail={updateUserEmail}/>} />
        <Route path="/signup" element={<Signup updateUserIsTeacher={updateUserIsTeacher} />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              {(userEmail !== '0' && (
                <Account updateUserEmail={updateUserEmail} updateUser={updateUser} isTeacher={userIsTeacher} />
              )) || <Navigate to="/signin" />}
            </ProtectedRoute>
          }
        />
      <Route path="/teachercourses" element={user !== '0' ? <TeacherCourses userEmail={userEmail} user={user} /> : <Navigate to='/account' />} />
      <Route path="/creategrade" element={userEmail !== '0' ? <CreateGrade /> : <Navigate to="/signin" />} />
      <Route path="/gradebook" element={userEmail !== '0' ? (user.isTeacher ? <GradeEditor userEmail={userEmail} user={user} /> : <Gradebook userEmail={userEmail} user={user} />) : <Navigate to='/signin' />} />
      <Route path="/createcourse" element={userEmail !== '0' ? <CreateClass user={user} updateUser={updateUser} /> : <Navigate to='/signin' />} />
      <Route path="/joincourse" element={userEmail !== '0' ? <JoinClass user={user} updateUser={updateUser} /> : <Navigate to='/signin' />} />
      <Route path="/editcourse" element={userEmail !== '0' ? <EditClass user={user} updateUser={updateUser} /> : <Navigate to='/signin' />} />
      <Route path="/sidebar" element={userEmail !== '0' ? <Sidebar /> : <Navigate to='/signin' />}/>
      <Route path="/discussions/:id" element={userEmail !== '0' ? <Discussions/> : <Navigate to='/signin' />} />
      <Route path="/coursepage/:courseCode" element={userEmail !== '0' ? <CoursePage user={user} /> : <Navigate to='/signin' />} />
      <Route path="/discussion/:courseid/:id" element={<Discussion />} />
      <Route path="/discussions/:courseid/discussion/:id" element={userEmail !== '0' ? <Discussion /> : <Navigate to='/signin' />} />
        </Routes>
       </AuthContextProvider>
    </div>    
  );
}

export default App;

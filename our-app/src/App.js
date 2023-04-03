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


function App() {

  const [userEmail, setUserEmail] = useState( localStorage.getItem('userEmail') || '0');

  const updateUserEmail = (newEmail) => {

    setUserEmail(newEmail);
    localStorage.setItem('userEmail', userEmail);
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || '0');

  const updateUser= (newUser) => {

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(user));
  };


  return (
    <div>

      <AuthContextProvider>

      {userEmail != '0' && <Sidebar userEmail={userEmail} />}
      
       <Routes>
        <Route path = '/' element = {<Signin updateUserEmail={updateUserEmail}/>} />
        <Route path = '/signup' element = {<Signup />} />
        <Route
            path='/account'
            element={
              <ProtectedRoute>
                {(userEmail !== '0' && <Account updateUserEmail={updateUserEmail} updateUser={updateUser} />) || <Navigate to='/' /> }
              </ProtectedRoute>
            }
          />
      <Route path="/teachercourses" element={user !== '0' ? <TeacherCourses userEmail={userEmail} user={user} /> : <Navigate to='/account' />} />
      <Route path="/createcourse" element={userEmail !== '0' ? <CreateClass user={user} /> : <Navigate to='/' />} />
      <Route path="/gradebook" element={userEmail !== '0' ? <Gradebook userEmail={userEmail} user={user} /> : <Navigate to='/' />} />
      <Route path="/create" element={userEmail !== '0' ? <CreateGrade /> : <Navigate to="/" />} />
      <Route path="/gradebook" element={userEmail !== '0' ? <Gradebook userEmail={userEmail} user={user} /> : <Navigate to='/' />} />
      <Route path="/create" element={userEmail !== '0' ? <CreateGrade /> : <Navigate to="/" />}/>
      <Route path="/createcourse" element={userEmail !== '0' ? <CreateClass user={user} updateUser={updateUser} /> : <Navigate to='/' />} />
      <Route path="/joincourse" element={userEmail !== '0' ? <JoinClass user={user} updateUser={updateUser} /> : <Navigate to='/' />} />
      <Route path="/editcourse" element={userEmail !== '0' ? <EditClass user={user} updateUser={updateUser} /> : <Navigate to='/' />} />
      <Route path="/gradebook" element={userEmail !== '0' ? <Gradebook /> : <Navigate to='/' />} />
      <Route path="/sidebar" element={userEmail !== '0' ? <Sidebar /> : <Navigate to='/' />}/>
      <Route path="/discussions" element={userEmail !== '0' ? <Discussions/> : <Navigate to='/' />} />
      <Route path="/coursepage/:courseCode" element={userEmail !== '0' ? <CoursePage user={user} /> : <Navigate to='/' />} />
      <Route path="/discussion/:id" element={<Discussion />} />
      <Route path="/discussions/discussion/:id" element={userEmail !== '0' ? <Discussion /> : <Navigate to='/' />} />
        </Routes>
       </AuthContextProvider>
    </div>    
  );
}

/*
Discussion Forum Content
*/

function hideIconBar() {
  var iconBar = document.getElementById("iconBar");
  var navigation = document.getElementById("navigation");
  iconBar.setAttribute("style", "display:none;");
  navigation.classList.remove("hide");
}

function showIconBar() {
  var iconBar = document.getElementById("iconBar");
  var navigation = document.getElementById("navigation");
  iconBar.setAttribute("style", "display:block;");
  navigation.classList.add("hide");
}

function showComment() {
  var commentArea = document.getElementById("comment-area");
  commentArea.setAttribute("style", "display:block;");
}

/*
End discussion forum content
*/

export default App;

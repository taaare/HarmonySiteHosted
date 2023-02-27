import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React from "react";
import CreateClass from './components/coursecreate.jsx';
import TeacherCourses from './components/teachercourses.jsx';
import Gradebook from './components/gradebook.jsx';
import Sidebar from './components/sidebar.jsx'


function App() {

  

  return (
    <>


      <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/teachercourses" element={<TeacherCourses />} />
      <Route path="/createcourse" element={<CreateClass />} />
      <Route path="/gradebook" element={<Gradebook />} />
      </Routes>
    </>
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

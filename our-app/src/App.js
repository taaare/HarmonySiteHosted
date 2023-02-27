import './App.css';
import React from "react";
import Login from './components/login.jsx'
import Gradebook from './components/gradebook.jsx'

function App() {

  

  return (
    <>
      <ul>
        <Login/>
      </ul>
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

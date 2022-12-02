import './App.css';
import React from "react";

function App() {

  

  return (
    <>
      <ul>
        <a href='login.html'><h1>Begin App</h1></a>
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

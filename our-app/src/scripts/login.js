import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoJjrsmcfoCkB-Q446yhlvYH_NUm3uNvQ",
  authDomain: "harmony-firebase-e0c11.firebaseapp.com",
  databaseURL: "https://harmony-firebase-e0c11-default-rtdb.firebaseio.com",
  projectId: "harmony-firebase-e0c11",
  storageBucket: "harmony-firebase-e0c11.appspot.com",
  messagingSenderId: "799614847534",
  appId: "1:799614847534:web:a23afc2a1c48b37d8d2dbf",
  measurementId: "G-289XZWRDQQ"
  };
  const firebase = initializeApp(firebaseConfig);
  const db = getDatabase(firebase);
  const auth = getAuth();

submitData.addEventListener('click', (e) => {
  
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  

  
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
        set(ref(db, 'newUsers/' + user.uid), {
          email: email,
          password: password,
        })
        .then(() => {
            alert('User created successfully');
        })
        .catch((error) => {
            alert(error);
        });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
    const user = userCredential.user;
    var lgDate = new Date();
        update(ref(db, 'newUsers/' + user.uid), {
          last_login: lgDate,
        })
        .then(() => {
            alert('User logged in successfully');
        })
        .catch((error) => {
            alert(error);
        });
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    // ..
  });

  signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
 // An error happened.
});

});

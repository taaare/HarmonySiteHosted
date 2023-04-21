import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.js';
import app from '../firebase.js';
import { getDatabase, set, ref, get} from "firebase/database";

const Account = ({ updateUserEmail, updateUser, isTeacher }) => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {

    window.localStorage.clear();

    try {
      await logout();
      navigate('/signin');
    } catch (e) {
      console.log(e.message);
    }

    updateUser('0');
    updateUserEmail('0');

  }

  useEffect(() => {
    
    const database = getDatabase(app);

    const userRef = ref(database, 'users/' + user.uid);

    const userInfo = {
      email: user.email,
      courses: [],
      isTeacher: isTeacher,
    };


    get(userRef).then((snapshot) => {


      if (snapshot.exists()) {
        const tempUser = snapshot.val();

        tempUser.uid = snapshot.key;

        updateUser(tempUser);
      } else {
        set(userRef, userInfo);
      }
    });

  }, [user]); // adds user to db if one with email doesn't exist
  
  useEffect(() => {
    updateUserEmail(user.email);
  }, [updateUserEmail]);

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4 bg-white border-black border-4 rounded'>
      <h1 className='text-2xl font-bold py-4 text-black'>Account</h1>
      <p> User Email: {user && user.email} </p>

      <button onClick = {handleLogout} className = 'border border-purple-500 bg-purple-600 hover:bg-purple-500 px-6 py-2 my-4 text-white'>Logout</button>
    </div>
  );
};

export default Account;
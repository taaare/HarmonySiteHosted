import React, {useEffect, useState} from 'react';
import '../styles/login.css';

const Login = () => {
    
    useEffect(() => {

        const script = document.createElement('script');
        script.src = '../scripts/login.js';
        script.async = true;
        script.type = 'text/jsx';
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return (
        <>
        <div>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Password" name="password" id="password" required />
          <hr />
          <button type="button" id="submitData" name="submitData" className="registerbtn">Register</button>
        </div>
        <div className="container signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
      </div>
      </>
    );
  }
  export default Login;

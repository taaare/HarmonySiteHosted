import React, {useEffect, useState} from 'react';
import '../styles/coursecreate.css';
import Sidebar from './sidebar.jsx';

const CreateClass = () => {

/**
 *     useEffect(() => {

        const script = document.createElement('script');
        script.src = '../scripts/coursecreate.js';
        script.async = true;
        script.type = 'text/jsx';
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
 */
  
      useEffect(() => {
        
        const courseForm = document.querySelector(".course-form");
        const courseName = document.querySelector(".class-name");
        const instructorName = document.querySelector(".instructor-name");
        const scheduledDays = document.querySelector(".scheduled-days");
        const startDate = document.querySelector(".start-date");
        const endDate = document.querySelector(".end-date");
        const startTime = document.querySelector(".start-time");
        const endTime = document.querySelector(".end-time");
        const submit = document.querySelector(".submit-form");
        
        
        if (submit) { 
            submit.addEventListener('click',(event) => {
            event.preventDefault();
            window.history.go(-1)
           // window.location.reload(); // this will become a confirmation page
            });
        };
      }, []);
    return (
    <>
        <Sidebar/>
        <div className="tempBody">
            <div className="container">
                <div className="innerbg">
                    <h1 id="myh1">Create Class</h1>
                    <form className="course-form">
                        <div className="">
                            <label htmlFor="class_name" className="inputheader">Class Name</label><br />
                            <input className="class-name" type="text" placeholder="BIO 112" />
                        </div>
                        <div>
                            <label htmlFor="instructor_name" className="inputheader">Instructor</label><br />
                            <input className="instructor-name" type="text" placeholder="James H. Long" />
                        </div>
                        <div>
                            <label htmlFor="scheduled_days" className="inputheader">Scheduled Days</label><br />
                            <input className="scheduled-days" type="text" placeholder="TTH" />
                        </div>
                        <div>
                            <label htmlFor="start_date" className="inputheader">Start Date</label><br />
                            <input className="start-date" type="date" />
                        </div>
                        <div>
                            <label htmlFor="end_date" className="inputheader">End Date</label><br />
                            <input className="end-date" type="date" />
                        </div>
                        <div>
                            <label htmlFor="start_time" className="inputheader">Start Time</label><br />
                            <input className="start-time" type="time" />
                        </div>
                        <div>
                            <label htmlFor="end_time" className="inputheader">End Time</label><br />
                            <input className="end-time" type="time" />
                        </div>
                        <div className="center">
                            <button type="submit" className="button submit-form">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default CreateClass;
import React, {useEffect, useState} from 'react';
import '../styles/studentcourses.css';

const StudentCourses = () => {


    return (
    <>
        <div className="container">
            <div className="coursearea">
                <a href={""}>
                <div className="courseblock"> {/*Will insert blocks in position based on number of courses*/}
                    <h1>BIO 110</h1>
                    <hr />
                    <div className="courseinfo"> {/*Course info will be inserted accordingly, currently filler info*/}
                    <h2>Instructor</h2>
                    <hr className="secondaryline" />
                    <h2>TBD</h2>
                    </div>
                    <div className="courseinfo">
                    <h2>Meeting Times</h2>
                    <hr className="secondaryline" />
                    <h2>TBD</h2>
                    </div>
                </div>
                </a>
                <a href={""}>
                <div className="courseblock">
                    <h1>CHEM 110</h1>
                    <hr />
                    <div className="courseinfo">
                    <h2>Instructor</h2>
                    <hr className="secondaryline" />
                    <h2>TBD</h2>
                    </div>
                    <div className="courseinfo">
                    <h2>Meeting Times</h2>
                    <hr className="secondaryline" />
                    <h2>TBD</h2>
                    </div>
                </div>
                </a>
                <a href={""}>
                <div className="courseblock">
                    <h1>HIS 110</h1>
                    <hr />
                    <div className="courseinfo">
                    <h2>Instructor</h2>
                    <hr className="secondaryline" />
                    <h2>TBD</h2>
                    </div>
                    <div className="courseinfo">
                    <h2>Meeting Times</h2>
                    <hr className="secondaryline" />
                    <h2>TBD</h2>
                    </div>
                </div>
                </a>
                <a href={""}>  
                <div className="courseblock">
                    <h1>SPAN 101</h1>
                    <hr />
                    <div className="courseinfo">
                    <h2>Instructor</h2>
                    <hr className="secondaryline" />
                    <h2>TBD</h2>
                    </div>
                    <div className="courseinfo">
                    <h2>Meeting Times</h2>
                    <hr className="secondaryline" />
                    <h2>TBD</h2>
                    </div>
                </div>
                </a>
            </div>
            <a className="joincoursebtn" href="">Create Course</a> {/*Button will popup course code section*/}
        </div>
    </>
  );
};

export default StudentCourses;
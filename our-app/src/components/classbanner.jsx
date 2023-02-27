import React, {useEffect, useState} from 'react';
import '../styles/teachercourses.css';

const ClassBanner = (props) => {


    return (
        <>
        <a href={""}> {/*Will be link to individual course page once setup*/}
            <div className="courseblock"> {/*Will insert blocks in position based on number of courses*/}
                <h1>{props.courseName}</h1>
                <hr />
                <div className="courseinfo"> {/*Course info will be inserted accordingly, currently filler info*/}
                <h2>Instructor</h2>
                <hr className="secondaryline" />
                <h2>{props.instructorName}</h2>
                </div>
                <div className="courseinfo">
                <h2>Meeting Times</h2>
                <hr className="secondaryline" />
                <h2>{props.meetingTimes}</h2>
                </div>
            </div>
        </a>
    </>
  );
};

export default ClassBanner;
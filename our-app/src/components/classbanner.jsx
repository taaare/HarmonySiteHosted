import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/teachercourses.module.css';

const ClassBanner = (props) => {
    const coursePath = `/coursepage/${props.courseCode}`;
    const course = props.course;

    return (
        <>
        <Link to={coursePath} state={{course}}> 
            <div className={styles.courseblock}> {/*Will insert blocks in position based on number of courses*/}
                <h1>{props.courseName}</h1>
                <hr />
                <div className={styles.courseinfo}> {/*Course info will be inserted accordingly, currently filler info*/}
                <h2>Instructor</h2>
                <hr className={styles.secondaryline} />
                <h2>{props.instructorName}</h2>
                </div>
                <div className={styles.courseinfo}>
                <h2>Course Code</h2>
                <hr className={styles.secondaryline} />
                <h2>{props.courseCode}</h2>
                </div>
            </div>
            </Link>
    </>
  );
};

export default ClassBanner;
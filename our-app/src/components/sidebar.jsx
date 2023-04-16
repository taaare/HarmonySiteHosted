import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/sidebar.module.css';
import { UserAuth } from '../context/AuthContext.js';

const Sidebar = (props) => {


    return (
        
        <>
            <div className={styles.tempbody}>
                <div className={styles.sidebar}>
                    <p className={styles.welcometext}>
                        {props.userEmail}
                    </p>
                    <div className={styles.sidebartextrectangle}>

                    <Link to="/account" className={styles.sidebartext}>Home</Link>
                    </div>
                    <div className={styles.sidebartextrectangle}>
                    <Link to="/teachercourses" className={styles.sidebartext}>Courses</Link>
                    </div>
                    <div className={styles.sidebartextrectangle}>
                    <Link to="/gradebook" className={styles.sidebartext}>Grades</Link>
                    </div>
                </div>
            </div>

        </>
    );
  }
  export default Sidebar;
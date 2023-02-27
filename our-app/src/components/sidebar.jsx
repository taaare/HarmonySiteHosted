import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/sidebar.module.css';

const Sidebar = () => {
    
    return (
        
        <>
            <div className={styles.tempbody}>
                <div className={styles.sidebar}>
                    <p className={styles.welcometext}>
                    Welcome,
                    %STUDENTNAME
                    </p>
                    <div className={styles.sidebartextrectangle}>

                    <Link to="/" className={styles.sidebartext}>Home</Link>
                    </div>
                    <div className={styles.sidebartextrectangle}>
                    <Link to="/teachercourses" className={styles.sidebartext}>Courses</Link>
                    </div>
                    <div className={styles.sidebartextrectangle}>
                    <a className={styles.sidebartext}>Calendar</a>
                    </div>
                    <div className={styles.sidebartextrectangle}>
                    <Link to="/gradebook" className={styles.sidebartext}>Gradebook</Link>
                    </div>
                    <div className={styles.sidebartextrectangle}>
                    <a href="threadlist.html" className={styles.sidebartext}>Discussions</a>
                    </div>
                    <div className={styles.sidebartextrectangle}>
                    <a className={styles.sidebartext}>TBD</a>
                    </div>
                </div>
            </div>

        </>
    );
  }
  export default Sidebar;
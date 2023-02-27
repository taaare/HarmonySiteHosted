import React, {useEffect, useState} from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
    
    return (
        
        <>
            <div className="tempbody">
                <div className="sidebar">
                    <p className="welcometext">
                    Welcome,
                    %STUDENTNAME
                    </p>
                    <div className="sidebartextrectangle">
                    <a className="sidebartext">Home</a>
                    </div>
                    <div className="sidebartextrectangle">
                    <a href="teachercourses.html" className="sidebartext">Courses</a>
                    </div>
                    <div className="sidebartextrectangle">
                    <a className="sidebartext">Calendar</a>
                    </div>
                    <div className="sidebartextrectangle">
                    <a href="gradebookedit.html" className="sidebartext">Gradebook</a>
                    </div>
                    <div className="sidebartextrectangle">
                    <a href="threadlist.html" className="sidebartext">Discussions</a>
                    </div>
                    <div className="sidebartextrectangle">
                    <a className="sidebartext">TBD</a>
                    </div>
                </div>
            </div>

        </>
    );
  }
  export default Sidebar;
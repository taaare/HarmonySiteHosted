import React, {useEffect, useState, Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/teachercourses.css';
import Sidebar from './sidebar.jsx';

class TeacherCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
        courses: [
            {
                "id" : 0 ,
                "name" : "ELE 210",
                "instructor" : "John E. Poggers",
            },
            {
                "id" : 1 ,
                "name" : "PGG 777",
                "instructor" : "Tomathy Jones",
            }
        ],

        courseCount: 2,

    };
    
    this.handleAddingComponent = this.handleAddingComponent.bind(this) //change

  }

  handleAddingComponent() {
    this.setState({courseCount: this.state.courseCount + 1})     
}

addClassBanner(){
    let count = this.state.courseCount, classBanners = [];
    
    for(var i = 0; i < this.state.courseCount; i++){
        classBanners.push(
            <a href={""}> {/*Will be link to individual course page once setup*/}
            <div className="courseblock"> {/*Will insert blocks in position based on number of courses*/}
                <h1>{this.state.courses[i].name}</h1>
                <hr />
                <div className="courseinfo"> {/*Course info will be inserted accordingly, currently filler info*/}
                <h2>Instructor</h2>
                <hr className="secondaryline" />
                <h2>{this.state.courses[i].instructor}</h2>
                </div>
                <div className="courseinfo">
                <h2>Meeting Times</h2>
                <hr className="secondaryline" />
                <h2>{this.state.courses[i].id}</h2>
                </div>
            </div>
        </a>
            )
    }

    return classBanners;
}



  render() {
    return (
        <>
        <Sidebar/>
        <div className="coursearea">

            <div className="container">
                {this.addClassBanner()} {/*Entry point for class banners*/}
                <Link to="/createcourse" className="createcoursebtn">Create Course</Link> {/*Button will redirect to create course page*/}
            </div>

        </div>
    </>
    );
  }
}

export default TeacherCourses;
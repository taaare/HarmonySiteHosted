import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/teachercourses.module.css';
import ClassBanner from './classbanner.jsx';
import { getDatabase, ref, onValue, } from "firebase/database";
import app from '../firebase.js';

class TeacherCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
        courses: [],

        courseCount: 0,

        user: null,

        userEmail: '0',

        loading: true,
    };

  }

  componentDidMount(){
    const database = getDatabase(app);

    const userCourses = [];

    this.setState({
      userEmail: this.props.userEmail,
      user: this.props.user,
    }, () => {    
      
      if(this.state.user.courses && this.state.user.courses.length > 0){

        for(var i = 0; i < this.state.user.courses.length; i++){

          const courseRef = ref(database, 'courses/' + this.state.user.courses[i]);
  
          onValue(courseRef, (snapshot) => { // individual course
            const course = snapshot.val();
            if(course !== null){
              userCourses.push(course);
            }

            this.setState({
              courses: userCourses,
              courseCount: userCourses.length,
              loading: false,
            });

          }, (error) => {
            console.error(error);
          });
        } // ending of for loop that loops through all courses in user and set's state after to help display courses for user
        
      } else{
        this.setState({
          loading: false,
        });
      }

  }
  
  );

  }


addClassBanner(){

    let classBanners = [];
    
      for(var i = 0; i < this.state.courses.length; i++){

        classBanners.push(
          
          <ClassBanner key={this.state.courses[i].courseCode}
                       courseName={this.state.courses[i].courseName} 
                       instructorName={this.state.courses[i].instructorName} 
                       courseCode={this.state.courses[i].courseCode}
                       course={this.state.courses[i]} />

        ) // coursecode becomes one of these so that we can use props to display right course page (using keys)

  }


    return classBanners;
}



  render() {
    return (
        <>
        <div className={styles.coursearea}>

            <div className={styles.container}>

                {this.state.loading ? (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100vh',
                    fontWeight: 'bold',
                    fontSize: '32px',
                    color: 'white',
                  }}>Loading...</div> // Show a loading message or a spinner
                ) : (
                  this.addClassBanner() // Entry point for class banners
                )}
              
              {
              (this.state.user && this.state.user.isTeacher) ? (
                <Link to="/createcourse" className={styles.createcoursebtn}>Create Course</Link>
              ) : ( <Link to="/joincourse" className={styles.createcoursebtn}>Join Course</Link>)
              }
            </div>

        </div>
    </>
    );
  }
}

export default TeacherCourses;
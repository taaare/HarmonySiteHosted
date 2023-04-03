import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push} from "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAoJjrsmcfoCkB-Q446yhlvYH_NUm3uNvQ",
  authDomain: "harmony-firebase-e0c11.firebaseapp.com",
  databaseURL: "https://harmony-firebase-e0c11-default-rtdb.firebaseio.com/",
  projectId: "harmony-firebase-e0c11",
  storageBucket: "harmony-firebase-e0c11.appspot.com",
  messagingSenderId: "799614847534",
  appId: "1:799614847534:web:a23afc2a1c48b37d8d2dbf",
  measurementId: "G-289XZWRDQQ"
};
const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);
const dbRef = ref(db, 'courses');

const courseName2 = "testCourseName";
const instructorName2 = "testInstructorName";
const scheduledDays2 = "testScheduledDays";
const startDate2 = "01-01-2023";
const endDate2 = "01-01-2024";
const startTime2 = "12:00";
const endTime2 = "12:01";

function writeCourse() {
    set(dbRef, {
      courseName: "testCourseName",
      instructorName: "testInstructorName",
      scheduledDays: "testScheduledDays",
      startDate: "01-01-2023",
      endDate: "01-01-2024",
      startTime: "12:00",
      endTime: "12:01"
  });
}



function testCourse(){
    writeCourse();
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
        
      window.courseName = data.courseName;
      window.instructorName = data.instructorName;
      window.scheduledDays = data.scheduledDays;
      window.startDate = data.startDate;
      window.endDate = data.endDate;
      window.startTime = data.startTime;
      window.endTime = data.endTime;

        // console.log(data)
        
    });
}

// testCourse();

test('correctly stores values in firebase', () => {

  testCourse();

  expect(window.courseName).toEqual(courseName2)
  expect(window.instructorName).toEqual(instructorName2)
  expect(window.scheduledDays).toEqual(scheduledDays2)
  expect(window.startDate).toEqual(startDate2)
  expect(window.endDate).toEqual(endDate2)
  expect(window.startTime).toEqual(startTime2)
  expect(window.endTime).toEqual(endTime2)

})
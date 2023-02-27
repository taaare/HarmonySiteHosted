
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

window.testWriteFunction = function testWriteFunction() {
  let name = 'testCreateUserFromApp2';
  var ref = firebase.database().ref('users');
  ref.push(name);
};

function writeCourse() {
  firebase.database().ref('courses').set({
    courseName: courseName.value,
    instructorName: instructorName.value,
    scheduledDays: scheduledDays.value,
    startDate: startDate.value,
    endDate: endDate.value,
    startTime: startTime.value,
    endTime: endTime.value
});

} 

window.readCourse = function readCourse() {
  const dbRef = firebase.database().ref();
  window.course = dbRef.child("course").get();
  
}

export { writeCourse };
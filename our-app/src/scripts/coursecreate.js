alert("Here");
const courseForm = document.querySelector(".course-form");
const courseName = document.querySelector(".class-name");
const instructorName = document.querySelector(".instructor-name");
const scheduledDays = document.querySelector(".scheduled-days");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const startTime = document.querySelector(".start-time");
const endTime = document.querySelector(".end-time");
const submit = document.querySelector(".submit-form");


if (submit) { 
    submit.addEventListener('click',(event) => {
    event.preventDefault();
    window.history.go(-1)
   // window.location.reload(); // this will become a confirmation page
    });
};

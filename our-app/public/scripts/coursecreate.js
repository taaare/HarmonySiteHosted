
            const courseForm = document.querySelector(".course-form");
            const courseName = document.querySelector(".class-name");
            const instructorName = document.querySelector(".instructor-name");
            const scheduledDays = document.querySelector(".scheduled-days");
            const startDate = document.querySelector(".start-date");
            const endDate = document.querySelector(".end-date");
            const startTime = document.querySelector(".start-time");
            const endTime = document.querySelector(".end-time");
            const submit = document.querySelector(".submit-form");

            function createCourse(courseName, instructorName, scheduledDays, startDate, endDate, startTime, endTime){
                const course = {
                    courseName: courseName, 
                    instructorName: instructorName, 
                    scheduledDays: scheduledDays, 
                    startDate: startDate,
                    endDate: endDate,
                    startTime: startTime,
                    endTime: endTime,
                };

                return course;
            } // will be used later to better firebase writing

            export default createCourse;

            if (submit) { 
                submit.addEventListener('click',(event) => {
                event.preventDefault();
                writeCourse();
                window.history.go(-1)
               // window.location.reload(); // this will become a confirmation page
                });
            };

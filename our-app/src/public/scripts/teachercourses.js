var courseHTML =    `<div class="courseblock">
                                <h1>APPENDED</h1>
                                <hr>
                                <div class="courseinfo">
                                    <h2>Instructor</h2>
                                    <hr class="secondaryline">
                                    <h2>TBD</h2>
                                </div>
                                <div class="courseinfo">
                                    <h2>Meeting Times</h2>
                                    <hr class="secondaryline">
                                    <h2>TBD</h2>
                                </div>
                            </div>
                            `
        
        // const courseOBJ = JSON.parse('{}');  
         
        let courses = [
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
        ]
        
        let numberOfCourses = 2;
        for(let i = 0; i < numberOfCourses; i++){
            document.querySelector(".coursearea").insertAdjacentHTML('beforeend', 
                            `
                            <a href="">
                                <div class="courseblock">
                                    <h1>${courses[i].name}</h1>
                                    <hr>
                                    <div class="courseinfo">
                                        <h2>Instructor</h2>
                                        <hr class="secondaryline">
                                        <h2>${courses[i].instructor}</h2>
                                    </div>
                                    <div class="courseinfo">
                                        <h2>Meeting Times</h2>
                                        <hr class="secondaryline">
                                        <h2>TBD</h2>
                                    </div>
                                </div>
                            </a>
                            `); // href values will become /courses/${courses[i].id}
        }
                        

        /**
         * document.querySelector(".coursearea").insertAdjacentHTML('beforeend', courseHTML);  // will use this code to insert the created html 
        document.querySelector(".coursearea").insertAdjacentHTML('beforeend', courseHTML);  // for the course. Will use variables to load
        document.querySelector(".coursearea").insertAdjacentHTML('beforeend', courseHTML);  // relevant information.
        document.querySelector(".coursearea").insertAdjacentHTML('beforeend', courseHTML);
                
         */
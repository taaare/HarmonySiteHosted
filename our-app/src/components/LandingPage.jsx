import React from 'react';
import { Link } from 'react-router-dom';
import background from './background.jpg';
import discussionScreenshot from './discussions.jpg';
import gradebook from './gradebook.png';
import courses from './courses.png';

const LandingPage = () => {
  return (
    <>
          <nav className="bg-white shadow-md">
              <div className="max-w-6xl mx-auto px-4">
                  <div className="flex justify-between">
                      <div className="flex items-center py-4">
                          <span className="ml-2 text-2xl font-bold text-gray-800">Harmony</span>
                      </div>
                      <div className="flex items-center space-x-4">
                          <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Get Started</Link>
                      </div>
                  </div>
              </div>
          </nav>
          <header className="bg-white">
              <div className="max-w-6xl mx-auto px-4">
                  <div className="flex flex-col lg:flex-row items-center py-20">
                      <div className="flex-1">
                          <h1 className="text-4xl font-bold text-gray-800 mb-6">Join Our Online Classroom</h1>
                          <p className="text-xl text-gray-600 mb-10">The Harmony app is a web-based student and faculty portal. It is a virtual learning environment where users can create accounts, browse registered classes, see their current grades, and create discussion posts to interact with peers and faculty. </p>
                      </div>
                      <div className="flex-1">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/y6120QOlsfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                  </div>
              </div>
          </header>
      <section className="bg-gray-200 py-16">
              <div className="max-w-6xl mx-auto px-4">
                  <div className="flex flex-col lg:flex-row items-center">
                      <div className="flex-1 pr-6">
                        {/*Insert discussion page screenshot here >*/}  <img src={discussionScreenshot} alt="Feature 1" className="h-full w-full mb-6 lg:mb-0" /> 
                      </div>
                      <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">Interactive Learning Experience</h2>
                          <p className="text-gray-600">Once you join a class via your class code, you can participate in discussions and collaborate with fellow students and teachers using our built in discussion forum where you can create posts, view and comment on your peer's and teacher's posts, making it easy to ask questions and learn with your fellow peers..</p>
                      </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center mt-16">
                      <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">High-Quality Course Content</h2>
                          <p className="text-gray-600">Teachers can easily add assignments and post grades using our built-in gradebook, and students can stay up to date on their assignments and view grades. </p>
                      </div>
                      <div className="flex-1">
                        {/*Insert grades page screenshot here >*/}  <img src={gradebook} alt="Feature 2" className="h-full w-full mb-6 lg:mb-0" />
                      </div>
                  </div>
                  <div className="max-w-6xl mx-auto px-4">
                  <div className="flex flex-col lg:flex-row items-center mt-16">
                      <div className="flex-1">
                        {/*Insert course page screenshot here >*/}  <img src={courses} alt="Feature 3" className="h-full w-full mb-6 lg:mb-0" /> 
                      </div>
                      <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Harmony?</h2>
                          <p className="text-gray-600">The Harmony virtual learning environment is easy to use and has all the features of a large platform but is entirely free! Students and teachers can jump right in without hassle and begin learning right now!</p>
                      </div>
                  </div>
                  </div>
              </div>
          </section>
        <footer className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex-1">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <p className="text-gray-500 dark:text-gray-400"><a href="https://github.com/SCCapstone/Harmony" className="pl-3 font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Our GitHub</a></p>
                    </div>
                <div className="flex-1 mt-4 lg:mt-0">
            <h2 className="text-lg font-bold mb-2 pl-16">Contact Us</h2>
                <p className="text-gray-400 pr-8">Cole Burnworth - burnworc@email.sc.edu</p>
                <p className="text-gray-400">Adam Sanfacon - sanfacoa@email.sc.edu</p>
                <p className="text-gray-400">Christian Meador - meadorbc@email.sc.edu</p>
                <p className="text-gray-400">Sam Godfrey - sjg6@email.sc.edu</p>
               </div>   
            </div>
        </div>
    </footer>
</> 
  )
  };

export default LandingPage;
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './sidebar.jsx';

import '../styles/gradebook.css';

const Gradebook = () => {
  return (
    <>
        
        <div className="container">
            <div className="innerbg">
                <h1>Gradebook</h1>
                <h2>%CLASSNAME%</h2>
                <h4>%STUDENTNAME%</h4>
                <br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 1
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 2
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 3
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 4
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 5
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 6
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 7
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 8
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="gradeSlide">
                <div className="assignment">
                    Assignment 9
                </div>
                <div className="grade">
                    100%
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Gradebook;



/**
 * class Gradebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count : 0}
        this.handleAddingDivs = this.handleAddingDivs.bind(this)
    }

    handleAddingDivs() {
        this.setState({count: this.state.count + 1})     
    }
    
    renderDivs(){
        let count = this.state.count, uiItems = [];
        while(count--)
           uiItems.push(
               <div>
                   This is added div! uniqueID: {count}
               </div> 
            )
        return uiItems;
    }

    render() {
        return (
            
            <div>
                <div className="container">
                <div className="innerbg">
                    <h1>Gradebook</h1>
                    <h2>%CLASSNAME%</h2>
                    <h4>%STUDENTNAME%</h4>
                    <br /><br />
                </div>
                </div>
                {this.renderDivs()}
            </div>
        )
    }
}

ReactDOM.render(<Gradebook/>, document.getElementById('app'))
 
export default Gradebook;
 */
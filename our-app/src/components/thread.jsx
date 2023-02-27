import React from "react";
import '../styles/thread.css';

class Thread extends React.Component {
    
    render() {
        return (
           
            <>
                <div className='container'>
                    <header>
                    <div className="brand">Discussions</div>
                    <div className="search" align="right">
                    <div>
                        <input type="text" name="q" placeholder="search" />
                        <button onclick><i className="fa fa-search" /></button>
                    </div>
                    </div>
                    <div className="navigate" align="center">
                    <span><a href="threadlist.html">Home</a> &lt;&lt; <a href="thread.html">Thread</a></span>
                    </div>
                    </header>
                    <div className="main">
                        <div className="header">
                        </div>
                        <div className="comments">
                        </div>
                        <br />
                        <div align="center"><textarea defaultValue={""} /><button className="createComment">Reply</button></div>
                    </div>
                </div>
            </>
        
          );
    }
  }

  export default Thread;
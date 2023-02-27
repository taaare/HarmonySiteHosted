var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Gradebook</title>
          <style dangerouslySetInnerHTML={{__html: "\n\n            body{\n                background: #192C3E;\n                font-family: sans-serif;\n            }\n            .innerbg {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                height: 80%;\n                width: 80%;\n                background-color: #8EA7B4;\n                border-radius: 4px;\n                overflow-y:auto;\n            }\n            h1{\n                text-align: center;\n            }\n            form{\n                text-align: center;\n            }\n            input{\n                box-sizing: border-box;\n                width: 200px;\n            }\n            .gradeSlide{\n                position: absolute;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                height: 9%;\n                width: 90%;\n                background-color: #afbcc4;\n                border-radius: 4px;\n                text-align: left;\n                font-size: 24px;\n                font-family: sans-serif;\n            }\n            .grade{\n                text-align: right;\n                margin-top: -2%;\n                margin-right: 1%;\n            \n            }\n            .grade2{\n                margin-top: -2%;\n                margin-right: 5%;\n                float: right;\n                clear: both;\n                width: 50px;        \n                border-radius: 8px;       \n            }\n            .assignment{\n                margin-top: 2%;\n                margin-left: 1%;\n            }\n            h2{\n                margin-left: 15px;\n            }\n            h4{\n                margin-left: 15px;\n            }\n            .total{\n                margin-top: -2%;\n                margin-right: 1%;\n                float: right;\n                clear: both;\n            }\n            #update{\n                margin-top: -5%;\n                margin-right: 5%;\n                float: right;\n                clear: both;\n                border: none;\n                outline: none;\n                background: #2B547E;\n                cursor: pointer;\n                font-size: 16px;\n                text-transform: uppercase;\n                color: black;\n                border-radius: 4px;\n                transition: .3x;\n            }\n            #add{\n                border: none;\n                outline: none;\n                background: #2B547E;\n                cursor: pointer;\n                font-size: 16px;\n                text-transform: uppercase;\n                color: black;\n                border-radius: 4px;\n                transition: .3x;\n            }\n            #assignment2{\n                margin-top: 2%;\n                border-radius: 8px;       \n            }\n            #total2{\n                border-radius: 8px;       \n            }\n\n        " }} />
          <div className="container">
            <div className="innerbg">
              <h1>Gradebook</h1>
              <h2>%CLASSNAME%</h2>
              <h4>%STUDENTNAME%</h4>
              <button id="update">Submit Grades</button>
              <br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 1
                </div>
                <input type="text" className="grade2" placeholder="Grade" />
                <div className="total">/100</div>
              </div>
              <br /><br /><br /><br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 2
                </div>
                <input type="text" className="grade2" placeholder="Grade" />
                <div className="total">/100</div>
              </div>
              <br /><br /><br /><br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 3
                </div>                    
                <input type="text" className="grade2" placeholder="Grade" />
                <div className="total">/100</div>
              </div>
              <br /><br /><br /><br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 4
                </div>                    
                <input type="text" className="grade2" placeholder="Grade" />
                <div className="total">/100</div>
              </div>
              <br /><br /><br /><br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 5
                </div>                    
                <input type="text" className="grade2" placeholder="Grade" />
                <div className="total">/100</div>
              </div>
              <br /><br /><br /><br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 6
                </div>                    
                <input type="text" className="grade2" placeholder="Grade" />
                <div className="total">/100</div>
              </div>
              <br /><br /><br /><br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 7
                </div>                    
                <input type="text" className="grade2" placeholder="Grade" />
                <div className="total">/100</div>
              </div>
              <br /><br /><br /><br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 8
                </div>                    
                <input type="text" className="grade2" placeholder="Grade" />
                <div className="total">/100</div>
              </div>
              <br /><br /><br /><br /><br />
              <div className="gradeSlide">
                <div className="assignment">
                  Assignment 9
                </div>                    
                <input type="text" className="grade2" placeholder="Grade" />
              </div>
              <div className="gradeSlide">                    
                <input type="text" id="assignment2" placeholder="Assignment Name" />
                <input type="text" id="total2" placeholder="Total Points" />
                <button id="add">Add</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
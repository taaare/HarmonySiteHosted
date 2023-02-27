<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Harmony Thread</title>
  <link rel="stylesheet" href="../src/App.css" />
  <style dangerouslySetInnerHTML={{__html: "\n            .brand{\n                text-align: center;\n                font-size: 50px;\n            }\n            body{\n                background: #192C3E;\n                font-family: sans-serif;\n            }\n            header{\n                background: #8EA7B4;\n            }\n            .main{\n                background: #8EA7B4;\n            }\n            .innerbg {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                height: 600px;\n                width: 900px;\n                background-color: #8EA7B4;\n            }\n            .header{\n                text-align: center;\n            }\n            h4{\n                font-size: 35px;\n            }\n            .button {\n                background-color: #192C3E;\n                border: none;\n                color: white;\n                margin-top: 15px;\n                padding: 15px 40px;\n                text-align: center;\n                font-size: 16px;\n                font-weight: bold;\n                cursor: pointer;\n            }\n            .comment {\n                background-color: silver;\n                text-align: center;\n            }\n            textarea {\n                text-align: left;\n                width: 250px;\n                height: 100px;\n            }\n        " }} />
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

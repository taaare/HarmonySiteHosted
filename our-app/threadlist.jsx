<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Harmony Thread List</title>
  <link rel="stylesheet" href="../src/App.css" />
  <style dangerouslySetInnerHTML={{__html: "\n            .brand{\n                text-align: center;\n                font-size: 50px;\n            }\n            body{\n                background: #192C3E;\n                font-family: sans-serif;\n            }\n            header{\n                background: #8EA7B4;\n            }\n            .container{\n                background: #8EA7B4;\n            }\n            .innerbg {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                height: 600px;\n                width: 900px;\n                background-color: #8EA7B4;\n                }\n\n            .button {\n                background-color: #192C3E;\n                border: none;\n                color: white;\n                margin-top: 15px;\n                padding: 15px 40px;\n                text-align: center;\n                font-size: 16px;\n                font-weight: bold;\n                cursor: pointer;\n\n            }\n            .row {\n                background-color: silver;\n            }\n            .threadname {\n                text-align: center;\n                width: 500px;\n                height: 20px;\n            }\n            .threadcontent {\n                text-align: left;\n                width: 500px;\n                height: 100px;\n            }\n        " }} />
  <header>
    <div className="brand">Discussions</div>
    <div className="search" align="right">
      <div>
        <input type="text" name="q" placeholder="search" />
        <button className="search"><i className="fa fa-search" /></button>
      </div>
    </div>
    <div className="navigate" align="center">
      <span><a href="threadlist.html">Home</a> &lt;&lt; <a href="thread.html">Thread</a></span>
    </div>
  </header>
  <div className="container">
    <div className="posts-table">
    </div>
    <div className="main">
      <ol>
      </ol>
    </div>
    <div align="center"><textarea className="threadname" defaultValue={""} /></div>
    <div align="center"><textarea className="threadcontent" defaultValue={""} /></div>
    <div align="center"><button className="createThread">Create Thread</button></div>
    <br />
    <div className="pagination" align="center">
      pages: <a href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">5</a>
    </div>
    <br />
  </div>
</div>

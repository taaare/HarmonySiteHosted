var defaultThreads = [
    {
        id: 0,
        title: "Does anybody understand what question 5 is asking",
        author: "John Doe",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "John Doe",
                date: Date.now(),
                content: "I can't figure this out? Are we supposed to"
            },
            {
                author: "Aaron",
                date: Date.now(),
                content: "I think the instructor wants us to"
            }
        ]
    },
    {
        id: 1,
        title: "I have a question about what the instructor covered in class",
        author: "Jane Doe",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jane Doe",
                date: Date.now(),
                content: "So, when you do this, are you supposed to use this property or this one"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "I think you need to use this property before this part, then that causes the equation to"
            }
        ]
    },{
        id: 2,
        title: "Thread 3",
        author: "Jane Doe",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jane Doe",
                date: Date.now(),
                content: "So, when you do this, are you supposed to use this property or this one"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "I think you need to use this property before this part, then that causes the equation to"
            }
        ]
    }
  ]
  
  var threads = defaultThreads
  if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
  } else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
  }
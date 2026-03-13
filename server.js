
// 1)
const express = require('express'); // imports the 'express' library and stores it in 'express' variable

// 2) 
const path = require('path'); //Imports the 'built-in' path module to help create the file paths

// 3)
const app = express(); // Creates an Express application instance
                        // 'express()' is calling the 'express' callable function that came in imported in the 'express' library when 'required'
                        // this in turn creates the 'app' object/intance that you can apply to a variety of methods fo rthings like:
                        // - defining routes
                        // - starting the server


//////////////////////////// Routes ///////////////////////////////
// 4)
app.get('/', (req, res) => {  // Creating a route for the homepage
    res.sendFile(path.join(__dirname, 'public/index.html')); // Now, when you run this server and go to http://localhost:3000, Express will look in the public folder...
                                                             // for an 'index.html' file and 'serve it automatically'.
                                                            // '__dirname 'is a special Node.js variable that always contains the absolute path to the directory...
                                                            //  where the currently executing script (server.js) is located.
                                                            // this says "hey when user visits the homepage ('/') with a GET request, i want you to look for the 'index.html'...
                                                            // file inside the 'public' folder and and serve it!"
                                                            // 'sendFile' = sends an HTML file back to the browser
})

// 5)
app.get('/contact', (req, res) => {   // Creating a route for the 'Contact' page
     res.sendFile(path.join(__dirname, 'public/contact.html'));  // very same logic as above but for the 'Contact' page
})


//////////////////////// Server /////////////////////

app.listen(3000, () => {     // Starts the server on listening port 3000
  console.log('Server running on port 3000'); // message displaye don server if server runs succesfully
});

//const PORT = 3000
//app.listen(PORT, () => {
  //console.log(`Server is running on port ${PORT}`);
//});

/*
Verbatim:
Steps completed:
- Set up a Node.js project
- Installed and used Express.js
- Created a public folder with two HTML pages
- Built a server that handles 2 routes (/ and /contact)
- Served real HTML files to a browser
- request/response flow:
-- user initates a GET request from the browser as follows (http://localhost:3000/)
-- browser sends a GET request to port 3000 on your machine (the port defined as the listening port for your server)
-- Express receives the request and checks/says "do I have a route that matches '/'?" If true (app.get('/'), THEN  runs the function
-- what the function does: finds 'public/index.html' on your local drive and serves it back to the broser where it renders
*/


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

////////////////////////////  ///////////////////////////////

// 4)
app.get('/', (req, res) => {  // Creating a route for the homepage
    res.sendFile(path.join(__dirname, 'public/index.html')); // Now, when you run this server and go to http://localhost:3000, Express will look in the public folder...
                                                             // for an 'index.html' file and 'serve it automatically'.
                                                            // '__dirname 'is a special Node.js variable that always contains the absolute path to the directory...
                                                            //  where the currently executing script (server.js) is located.
                                                            // this says "hey when user visits the homepage ('/') with a GET request, i want you to look for the 'index.html'...
                                                            // file inside the 'public' folder and and serve it!"
})




//const PORT = 3000

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



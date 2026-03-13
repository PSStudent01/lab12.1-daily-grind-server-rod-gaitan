
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


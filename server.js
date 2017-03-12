console.log('working')

// ripped off https://expressjs.com/en/starter/hello-world.html
var express = require('express')
var app = express()

// serve the files on local server
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 3000);
// which is basically saying: go to port 3000, listen to those requests, and run these requests
// there are many ports on your computer, users often use 3000 or 8000 // we're using 3000
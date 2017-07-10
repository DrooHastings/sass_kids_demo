var express = require('express');
var app = express();
var path = require('path');


// serve static files
app.use(express.static(path.resolve('./public')));

// server index file
// app.get('/info', function(req, res) {
//     res.send("hello from the server");
// });

app.get('/', function(req,res){
  res.sendFile(path.resolve('public/index.html') );
});

app.listen(3000, function() {
  console.log("server running, check localhost:3000");
});

var express = require('express');
var app = express();
var path = require('path');
//globals
var port = process.env.PORT || 3456;

// serve static files
app.use(express.static(path.resolve('./server/public')));

// server index file
app.get('/info', function(req, res) {
    res.send("hello from the server");
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.listen(port, function() {
  console.log("server running, check localhost:port" + port);
});
 

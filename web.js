var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(request, response){
  
  var content;
  fs = require('fs')
  fs.readFile('./index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  buf = new Buffer(data);
  len = buf.write(data.toString());
  content = buf.toString('utf8', 0, len);
  
});
  response.send(content);
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
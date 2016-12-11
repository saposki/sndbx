var express = require('express');
var app = express();
var PORT = 8080;

var jsonData = {count: 12, message:'hey'};


app.use(express.static(__dirname + '/'))

app.get('/data', function(req, res){
  res.json(jsonData);

  // res.type('json')
  // res.end(JSON.stringify({jsonData:jsonData}));
})

var server = app.listen(PORT, function(){
  console.log('Listening on port: ',  PORT);
})

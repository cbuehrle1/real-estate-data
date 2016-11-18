var express = require("express");
var parse = require('./csv-parser.js');


var app = express();

app.use(express.static("public"));

app.get('/api/realestatedata', function(req, res) {

  var callback = function(outputIsHere) {

    res.send(outputIsHere);
  }


  parse(callback);

});

app.listen(3001, function(){
  console.log("AND WE'RE LIVE");
});

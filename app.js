var express = require("express");
var parse = require('./csv-parser.js');

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs")

app.get('/api/realestatedata', function(req, res) {

  var callback = function(result) {

    res.send(result);
  }


  parse(callback);

});

app.get('/sacramento-html', function(req, res) {

  var callback = function(result) {
    res.render('sacramento', {
      dataContent: result
    });
  }

  parse(callback);
});

var port = process.env.PORT || 3001;

app.listen(port, function(){
  console.log("AND WE'RE LIVE");
});

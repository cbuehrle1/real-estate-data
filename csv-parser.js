var fs = require("fs");

function parse(callback) {

  var callbackForReadFile = function(err, data) {

  var lines = data.split("\r");

  var dataContent = []

  for(var i = 1; i < lines.length - 1; i++){
    var indivArr = lines[i].split(",");

    var address = {
      street: indivArr[0],
      city: indivArr[1],
      zip: indivArr[2],
      state: indivArr[3],
      beds: indivArr[4],
      baths: indivArr[5],
      sqft: indivArr[6],
      type: indivArr[7],
      sale_date: indivArr[8],
      price: indivArr[9],
      latitude: indivArr[10],
      longitude: indivArr[11]
    };

    dataContent.push(address);
  };

  callback(dataContent);
};

fs.readFile("Sacramentorealestatetransactions.csv", "utf-8", callbackForReadFile);

}

module.exports = parse;

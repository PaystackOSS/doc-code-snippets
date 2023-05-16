var request = require("request");
var fs = require("fs");

fs.readFile('./transaction_reference.pdf', function (err, data) {
  var options = {
    method: "PUT",
    url: signedUrl,
    'Content-Type': 'application/pdf',
    body: data
  }

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    console.log("Status code: ", response.statusCode);
  });
});
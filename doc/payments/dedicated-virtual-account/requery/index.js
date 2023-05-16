var https = require('https');

var options = {
  'method': 'GET',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/requery?account_number={accountNumber}&provider_slug={provider_slug}&date={yyyy-mm-dd}',
  'headers': {
    'Authorization': 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
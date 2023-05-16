var https = require('https');

var options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/split',
  'headers': {
    'authorization': 'Bearer SECRET_KEY',
    'content-type': 'application/json'
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

var postData = JSON.stringify({
  "account_number":"0033322211",
  "subaccount":"SUB_ACCOUNTCODE"
});

req.write(postData);

req.end();
var https = require('https');

var options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/assign',
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

var postData = JSON.stringify({
    "email": "janedoe@test.com",
    "first_name": "Jane",
    "middle_name": "Karen",
    "last_name": "Doe",
    "phone": "+2348100000000",
    "preferred_bank": "test-bank",
    "country": "NG",
    "account_number": "0123456789",
    "bvn": "20012345678",
    "bank_code": "007"
});

req.write(postData);

req.end();
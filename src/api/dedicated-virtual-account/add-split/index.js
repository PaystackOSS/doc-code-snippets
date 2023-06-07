const https = require('follow-redirects').https;
const fs = require('fs');

let options = {
  'method': 'POST',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account',
  'headers': {
    'authorization': 'Bearer SEECRET_KEY',
    'content-type': 'application/json',
    'user-agent': 'Paystack-Developers-Hub'
  },
  'maxRedirects': 20
};

let req = https.request(options, function (res) {
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

let postData = JSON.stringify({"customer":481193,"preferred_bank":"wema-bank", "split_code": "SPL_e7jnRLtzla"});

req.write(postData);

req.end();
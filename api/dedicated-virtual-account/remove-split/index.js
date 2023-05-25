const https = require('follow-redirects').https;
const fs = require('fs');

const options = {
  'method': 'DELETE',
  'hostname': 'api.paystack.co',
  'path': '/dedicated_account/split',
  'headers': {
    'authorization': 'Bearer SEECRET_KEY',
    'content-type': 'application/json'
  },
  'maxRedirects': 20
};

const req = https.request(options, function (res) {
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

const postData = JSON.stringify({"account_number":"0033322211"});

req.setHeader('Content-Length', postData.length);

req.write(postData);

req.end();
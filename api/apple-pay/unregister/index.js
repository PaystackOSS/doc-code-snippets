const https = require('https');

const params = JSON.stringify({
  "domainName": "example.com"
});

const options = {
  'method': 'DELETE',
  'hostname': 'api.paystack.co',
  'path': '/apple-pay/domain',
  'headers': {
    'authorization': 'Bearer SECRET_KEY',
    'content-type': 'application/json'
  }
};

const req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.setHeader('Content-Length', Buffer.byteLength(params));
req.write(params);
req.end();

const https = require('https')

const params = JSON.stringify({
  "domainName": "example.com"
})

const options = {
  'method': 'DELETE',
  'hostname': 'api.paystack.co',
  'path': '/apple-pay/domain',
  'headers': {
    'authorization': 'Bearer SEECRET_KEY',
    'content-type': 'application/json'
  }
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

req.setHeader('Content-Length', params.length);
req.write(params);
req.end();
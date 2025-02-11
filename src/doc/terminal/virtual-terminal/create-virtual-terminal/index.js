const https = require('https');

const params = JSON.stringify({
  name: "Sales Point #1",
  destinations: [
    { target: "+2347081234567" }
  ]
});

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/virtual_terminal',
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_SECRET_KEY',
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', error => {
  console.error(error);
});

req.write(params);
req.end();

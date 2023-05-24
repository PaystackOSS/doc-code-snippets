const sh = `curl https://api.paystack.co/apple-pay/domain 
-H "Authorization: Bearer YOUR_SECRET_KEY" 
-H "Content-Type: application/json" 
-d '{ "domainName": "example.com" }' 
-X DELETE`

const js = `const https = require('https');

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
`

const php = `<?php

  $url = "https://api.paystack.co/apple-pay/domain";

  $fields = [
    "domainName" => "example.com"
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_TIMEOUT, 0);
  curl_setopt($ch,CURLOPT_MAXREDIRS, 10);
  curl_setopt($ch,CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
  curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "DELETE");
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "authorization: Bearer SECRET_KEY",
    "content-type: application/json",
    "Cookie: __cfduid=df6355b0f005797cd79527d1a6da37c131598191689"
  ));
   
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>`

const json = `{
	"200": {
		"description": "200 Ok",
		"data": {
			"status": true,
			"message": "Domain successfully registered on Apple Pay"
		}
	}
}
`

export {sh, js, php, json}
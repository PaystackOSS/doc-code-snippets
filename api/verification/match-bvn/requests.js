const bash = `curl https://api.paystack.co/bvn/match
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "bvn": "12345678912",
      "account_number": "0000000000",
      "bank_code": "087",
      "first_name": "bojack",
      "last_name": "horseman"
  }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "bvn": "12345678912",
  "account_number": "0000000000",
  "bank_code": "087",
  "first_name": "bojack",
  "last_name": "horseman"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bvn/match',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

req.write(params)
req.end()`

const php = `<?php
  $url = "https://api.paystack.co/bvn/match";

  $fields = [
    "bvn" => "12345678912",
    "account_number" => "0000000000",
    "bank_code" => "087",
    "first_name" => "bojack",
    "last_name" => "horseman"
  ];

  $fields_string = http_build_query($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache",
  ));
  
  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>`

export { bash, js, php }
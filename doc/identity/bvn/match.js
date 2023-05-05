const bash = `curl https://api.paystack.co/bvn/match
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "bvn": "xxxxxxxxxxx", 
      "account_number": "0001234567", 
     "bank_code": "058", 
     "first_name": "Jane", 
     "last_name": "Doe",
     "middle_name": "Loren"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  bvn: "xxxxxxxxxxx",
  account_number: "0001234567",
  bank_code: "058",
  first_name: "Jane",
  last_name: "Doe",
  middle_name: "Loren"
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
    'bvn' => "xxxxxxxxxxx",
    'account_number' => '0001234567',
    'bank_code' => '058',
    'first_name' => "Jane",
    'last_name' => 'Doe',
    'middle_name' => 'Loren'
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

const json = `{
  "status": true,
  "message": "BVN lookup successful",
  "data": {
    "bvn": "xxxxxxxxxxx",
    "is_blacklisted": false,
    "account_number": true,
    "first_name": true,
    "middle_name": false,
    "last_name": true
  },
  "meta": {
    "calls_this_month": 1,
    "free_calls_left": 9
  }
}`

export { bash, js, php, json }
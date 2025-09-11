const sh = `curl https://api.paystack.co/bank/validate
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "bank_code": "632005",
      "country_code": "ZA",
      "account_number": "0123456789",
      "account_name": "Ann Bron",
      "account_type": "personal",
      "document_type": "identityNumber",
      "document_number": "1234567890123"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "bank_code": "632005",
  "country_code": "ZA",
  "account_number": "0123456789",
  "account_name": "Ann Bron",
  "account_type": "personal",
  "document_type": "identityNumber",
  "document_number": "1234567890123"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bank/validate',
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
  $url = "https://api.paystack.co/bank/validate";
  $fields = [
    'bank_code' => "632005",
    'country_code' => 'ZA',
    'account_number' => '0123456789',
    'account_name' => 'Jane Ann',
    'account_type' => 'personal',
    'document_type' => 'identityNumber',
    'document_number' => '1234567890123'
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
  "message": "Personal Account Verification attempted",
  "data": {
    "accountAcceptsDebits":true,
    "accountAcceptsCredits": true,
    "accountHolderMatch": true,
    "accountOpenForMoreThanThreeMonths": true,
    "accountOpen": true,
    "verified": true,
    "verificationMessage": "Account is verified successfully"
  }
}`

export {sh, js, php, json}
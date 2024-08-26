const sh = `curl https://api.paystack.co/subaccount
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "business_name": "Oasis", 
      "bank_code": "058", 
      "account_number": "0123456047", 
      "percentage_charge": 30 
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "business_name": "Oasis",
  "bank_code": "058",
  "account_number": "0123456047",
  "percentage_charge": 30
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subaccount',
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
  $url = "https://api.paystack.co/subaccount";

  $fields = [
    'business_name' => "Oasis",
    'bank_code' => "058",
    'account_number' => "0123456047",
    'percentage_charge' => 30
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
	"message": "Subaccount created",
	"data": {
		"business_name": "Oasis",
		"account_number": "0123456047",
		"percentage_charge": 30,
		"settlement_bank": "Guaranty Trust Bank",
		"currency": "NGN",
		"bank": 9,
		"integration": 463433,
		"domain": "test",
		"account_name": "LARRY JAMES  O",
		"product": "collection",
		"managed_by_integration": 463433,
		"subaccount_code": "ACCT_6uujpqtzmnufzkw",
		"is_verified": false,
		"settlement_schedule": "AUTO",
		"active": true,
		"migrate": false,
		"id": 1151727,
		"createdAt": "2024-08-26T09:24:28.723Z",
		"updatedAt": "2024-08-26T09:24:28.723Z"
	}
}`

export {sh, js, php, json}
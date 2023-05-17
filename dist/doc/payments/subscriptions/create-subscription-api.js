const sh = `curl https://api.paystack.co/subscription
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "customer": "CUS_xxxxxxxxxx", "plan": "PLN_xxxxxxxxxx" }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_xxxxxxxxxx",
  "plan": "PLN_xxxxxxxxxx"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
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
  $url = "https://api.paystack.co/transaction/initialize";

  $fields = [
    'customer' => "CUS_xxxxxxxxxx",
    'plan' => "PLN_xxxxxxxxxx"
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
	"message": "Subscription successfully created",
	"data": {
		"customer": 24259516,
		"plan": 49122,
		"integration": 428626,
		"domain": "test",
		"start": 1590152172,
		"status": "active",
		"quantity": 1,
		"amount": 500000,
		"authorization": {
			"authorization_code": "AUTH_pmx3mgawyd",
			"bin": "408408",
			"last4": "4081",
			"exp_month": "12",
			"exp_year": "2020",
			"channel": "card",
			"card_type": "visa DEBIT",
			"bank": "Test Bank",
			"country_code": "NG",
			"brand": "visa",
			"reusable": true,
			"signature": "SIG_2Gvc6pNuzJmj4TCchXfp",
			"account_name": null
		},
		"invoice_limit": 0,
		"subscription_code": "SUB_i6wmhzi0lu95oz7",
		"email_token": "n27dvho4kjsf1sq",
		"id": 161872,
		"createdAt": "2020-05-22T12:56:12.514Z",
		"updatedAt": "2020-05-22T12:56:12.514Z",
		"cron_expression": "0 0 22 * *",
		"next_payment_date": "2020-06-22T00:00:00.000Z"
	}
}`

export {sh, js, php, json}
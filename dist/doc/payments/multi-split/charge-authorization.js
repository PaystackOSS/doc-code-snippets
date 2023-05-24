const sh = `curl https://api.paystack.co/transaction/charge_authorization
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "authorization_code" : "AUTH_12abc345de", "email": "mail@mail.com", 
      "amount": "300000", "split_code": "SPL_UO2vBzEqHW" }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "authorization_code" : "AUTH_12abc345de",
  "email" : "mail@mail.com",
  "amount" : 300000,
  "split_code" : "SPL_UO2vBzEqHW" 
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/charge_authorization',
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
  $url = "https://api.paystack.co/transaction/charge_authorization";

  $fields = [
    'authorization_code' => "AUTH_12abc345de",
    'email' => "mail@mail.com",
    'amount' => "300000",
    'split_code' => "SPL_UO2vBzEqHW" 
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
	"message": "Charge attempted",
	"data": {
		"amount": 300000,
		"currency": "NGN",
		"transaction_date": "2020-05-27T11:45:03.000Z",
		"status": "success",
		"reference": "cn65lf4ixmkzvda",
		"domain": "test",
		"metadata": "",
		"gateway_response": "Approved",
		"message": null,
		"channel": "card",
		"ip_address": null,
		"log": null,
		"fees": 14500,
		"authorization": {
			"authorization_code": "AUTH_12abc345de",
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
		"customer": {
			"id": 23215815,
			"first_name": null,
			"last_name": null,
			"email": "mail@mail.com",
			"customer_code": "CUS_wt0zmhzb0xqd4nr",
			"phone": null,
			"metadata": null,
			"risk_action": "default"
		},
		"plan": null,
		"id": 696105928
	}
}`

export {sh, js, php, json}
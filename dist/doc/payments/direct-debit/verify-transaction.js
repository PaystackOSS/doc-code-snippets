const sh = `#!/bin/sh
curl https://api.paystack.co/transaction/verify/:reference
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/verify/:reference',
  method: 'GET',
  headers: {
    Authorization: 'Bearer SECRET_KEY'
  }
}

https.request(options, res => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})`

const php = `<?php
  $curl = curl_init();
  
  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.paystack.co/transaction/verify/:reference",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "Authorization: Bearer SECRET_KEY",
      "Cache-Control: no-cache",
    ),
  ));
  
  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);
  
  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    echo $response;
  }
?>`

const json = `{
	"status": true,
	"message": "Verification successful",
	"data": {
		"id": 1504238596,
		"domain": "live",
		"status": "success",
		"reference": "nl3eljdd6qgbrho",
		"receipt_number": null,
		"amount": 10000,
		"message": "madePayment",
		"gateway_response": "Payment successful",
		"paid_at": "2023-10-24T12:32:30.000Z",
		"created_at": "2023-10-24T12:32:24.000Z",
		"channel": "direct_debit",
		"currency": "NGN",
		"ip_address": null,
		"metadata": "",
		"log": null,
		"fees": null,
		"fees_split": null,
		"authorization": {
			"authorization_code": "AUTH_JV4T9Wawdj",
			"bin": null,
			"last4": null,
			"exp_month": null,
			"exp_year": null,
			"channel": "direct_debit",
			"card_type": null,
			"bank": "Guaranty Trust Bank",
			"country_code": "NG",
			"brand": null,
			"reusable": true,
			"signature": null,
			"account_name": null
		},
		"customer": {
			"id": 180061682,
			"first_name": "Dami",
			"last_name": "Olukini",
			"email": "damilola@test.com",
			"customer_code": "CUS_24lze1c8i2zl76y",
			"phone": "",
			"metadata": null,
			"risk_action": "default",
			"international_format_phone": null
		},
		"plan": null,
		"split": {},
		"order_id": null,
		"paidAt": "2023-10-24T12:32:30.000Z",
		"createdAt": "2023-10-24T12:32:24.000Z",
		"requested_amount": 10000,
		"pos_transaction_data": null,
		"source": null,
		"fees_breakdown": null,
		"transaction_date": "2023-10-24T12:32:24.000Z",
		"plan_object": {},
		"subaccount": {}
	}
}
`

export {sh, js, php, json}
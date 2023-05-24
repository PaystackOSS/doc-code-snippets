const sh = `curl https://api.paystack.co/bulkcharge/:id_or_code/charges
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bulkcharge/:id_or_code/charges',
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
    CURLOPT_URL => "https://api.paystack.co/bulkcharge/:id_or_code/charges",
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
	"200": {
		"description": "200 Ok",
		"data": {
			"status": true,
			"message": "Bulk charge items retrieved",
			"data": [
				{
					"integration": 100073,
					"bulkcharge": 18,
					"customer": {
						"id": 181336,
						"first_name": null,
						"last_name": null,
						"email": "test@again.com",
						"customer_code": "CUS_dw5posshfd1i5uj",
						"phone": null,
						"metadata": null,
						"risk_action": "default"
					},
					"authorization": {
						"authorization_code": "AUTH_jh3cfpca",
						"bin": "412345",
						"last4": "1381",
						"exp_month": "08",
						"exp_year": "2088",
						"channel": "card",
						"card_type": "visa visa",
						"bank": "TEST BANK",
						"country_code": "NG",
						"brand": "visa",
						"reusable": true,
						"account_name": "BoJack Horseman"
					},
					"transaction": {
						"id": 718835,
						"domain": "test",
						"status": "success",
						"reference": "2mr588n0ik9enja",
						"amount": 20500,
						"message": null,
						"gateway_response": "Successful",
						"paid_at": "2017-02-04T06:05:02.000Z",
						"created_at": "2017-02-04T06:05:02.000Z",
						"channel": "card",
						"currency": "NGN",
						"ip_address": null,
						"metadata": "",
						"log": null,
						"fees": null,
						"fees_split": null,
						"customer": {},
						"authorization": {},
						"plan": {},
						"subaccount": {},
						"paidAt": "2017-02-04T06:05:02.000Z",
						"createdAt": "2017-02-04T06:05:02.000Z"
					},
					"domain": "test",
					"amount": 20500,
					"currency": "NGN",
					"status": "success",
					"id": 15,
					"createdAt": "2017-02-04T06:04:26.000Z",
					"updatedAt": "2017-02-04T06:05:03.000Z"
				},
				{
					"integration": 100073,
					"bulkcharge": 18,
					"customer": {
						"id": 181336,
						"first_name": null,
						"last_name": null,
						"email": "duummy@email.com",
						"customer_code": "CUS_dw5posshfd1i5uj",
						"phone": null,
						"metadata": null,
						"risk_action": "default"
					},
					"authorization": {
						"authorization_code": "AUTH_qdyfjbl3",
						"bin": "412345",
						"last4": "1381",
						"exp_month": "08",
						"exp_year": "2018",
						"channel": "card",
						"card_type": "visa visa",
						"bank": "TEST BANK",
						"country_code": "NG",
						"brand": "visa",
						"reusable": true,
						"account_name": "BoJack Horseman"
					},
					"transaction": {
						"id": 718836,
						"domain": "test",
						"status": "success",
						"reference": "5xkmvfe2h4065zl",
						"amount": 11500,
						"message": null,
						"gateway_response": "Successful",
						"paid_at": "2017-02-04T06:05:02.000Z",
						"created_at": "2017-02-04T06:05:02.000Z",
						"channel": "card",
						"currency": "NGN",
						"ip_address": null,
						"metadata": "",
						"log": null,
						"fees": null,
						"fees_split": null,
						"customer": {},
						"authorization": {},
						"plan": {},
						"subaccount": {},
						"paidAt": "2017-02-04T06:05:02.000Z",
						"createdAt": "2017-02-04T06:05:02.000Z"
					},
					"domain": "test",
					"amount": 11500,
					"currency": "NGN",
					"status": "success",
					"id": 16,
					"createdAt": "2017-02-04T06:04:26.000Z",
					"updatedAt": "2017-02-04T06:05:03.000Z"
				}
			],
			"meta": {
				"total": 2,
				"skipped": 0,
				"perPage": 50,
				"page": 1,
				"pageCount": 1
			}
		}
	}
}
`

export {sh, js, php, json}
const sh = `curl https://api.paystack.co/bank?currency=ZAR&enabled_for_verification=true
-H "Authorization: Bearer YOUR_SECRET_KEY"
-X GET`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/bank?currency=ZAR&enabled_for_verification=true',
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
    CURLOPT_URL => "https://api.paystack.co/bank?currency=ZAR&enabled_for_verification=true",
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
	"message": "Banks retrieved",
	"data": [
		{
			"id": 140,
			"name": "Absa Bank Limited, South Africa",
			"slug": "absa-za",
			"code": "632005",
			"longcode": "632005",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 141,
			"name": "African Bank Limited",
			"slug": "african-bank-za",
			"code": "430000",
			"longcode": "430000",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 146,
			"name": "Capitec Bank Limited",
			"slug": "capitec-bank-za",
			"code": "470010",
			"longcode": "470010",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["personal"]
		},
		{
			"id": 147,
			"name": "Discovery Bank Limited",
			"slug": "discovery-bank-za",
			"code": "679000",
			"longcode": "679000",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 151,
			"name": "First National Bank",
			"slug": "first-national-bank-za",
			"code": "250655",
			"longcode": "250655",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 152,
			"name": "Grindrod Bank",
			"slug": "grindrod-bank-za",
			"code": "584000",
			"longcode": "584000",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 153,
			"name": "Investec Bank Ltd",
			"slug": "investec-bank-za",
			"code": "580105",
			"longcode": "580105",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 157,
			"name": "Nedbank",
			"slug": "nedbank-za",
			"code": "198765",
			"longcode": "198765",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 161,
			"name": "SASFIN Bank",
			"slug": "sasfin-bank-za",
			"code": "683000",
			"longcode": "683000",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 163,
			"name": "Standard Bank South Africa",
			"slug": "standard-bank-za",
			"code": "051001",
			"longcode": "051001",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		},
		{
			"id": 165,
			"name": "TymeBank",
			"slug": "tymebank-za",
			"code": "678910",
			"longcode": "678910",
			"gateway": null,
			"pay_with_bank": false,
			"active": true,
			"country": "South Africa",
			"currency": "ZAR",
			"type": "basa",
			"is_deleted": false,
			"createdAt": "2020-09-04T10:38:56.000Z",
			"updatedAt": null,
			"supported_types": ["business", "personal"]
		}
	]
}`

export {sh, js, php, json}
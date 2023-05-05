const bash = `curl https://api.paystack.co/split
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "name":"Percentage Split", 
      "type":"percentage", 
      "currency": "NGN",
      "subaccounts":[{
        "subaccount": "ACCT_z3x6z3nbo14xsil",
        "share": 20
    },
    {
        "subaccount": "ACCT_pwwualwty4nhq9d",
        "share": 30
    }], 
      "bearer_type":"subaccount", 
      "bearer_subaccount":"ACCT_hdl8abxl8drhrl3"
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "name":"Percentage Split", 
  "type":"percentage",
  "currency": "NGN", 
	"subaccounts":[{
    "subaccount": "ACCT_z3x6z3nbo14xsil",
    "share": 20
  },
  {
      "subaccount": "ACCT_pwwualwty4nhq9d",
      "share": 30
  }], 
	"bearer_type":"subaccount", 
	"bearer_subaccount":"ACCT_hdl8abxl8drhrl3"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/split',
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
  $url = "https://api.paystack.co/split";

  $fields = [
    'name' => "Percentage Split", 
    'type' => "percentage",
    'currency' => "NGN", 
    'subaccounts' => [[
      "subaccount" => "ACCT_z3x6z3nbo14xsil",
      "share" => 20
    ],
    [
        "subaccount" => "ACCT_pwwualwty4nhq9d",
        "share" => 30 
    ]], 
    'bearer_type' => "subaccount", 
    'bearer_subaccount' => "ACCT_hdl8abxl8drhrl3"
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
  "message": "Split created",
  "data": {
    "id": 142,
    "name": "Test Doc",
    "type": "percentage",
    "currency": "NGN",
    "integration": 428626,
    "domain": "test",
    "split_code": "SPL_e7jnRLtzla",
    "active": true,
    "bearer_type": "subaccount",
    "bearer_subaccount": 40809,
    "createdAt": "2020-06-30T11:42:29.150Z",
    "updatedAt": "2020-06-30T11:42:29.150Z",
    "subaccounts": [
      {
        "subaccount": {
          "id": 40809,
          "subaccount_code": "ACCT_z3x6z3nbo14xsil",
          "business_name": "Business Name",
          "description": "Business Description",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "percentage_charge": 20,
          "settlement_bank": "Business Bank",
          "account_number": "1234567890"
        },
        "share": 20
      },
      {
        "subaccount": {
          "id": 40809,
          "subaccount_code": "ACCT_pwwualwty4nhq9d",
          "business_name": "Business Name",
          "description": "Business Description",
          "primary_contact_name": null,
          "primary_contact_email": null,
          "primary_contact_phone": null,
          "metadata": null,
          "percentage_charge": 20,
          "settlement_bank": "Business Bank",
          "account_number": "0123456789"
        },
        "share": 30
      }
    ],
    "total_subaccounts": 2
  }
}`

export { bash, js, php, json }
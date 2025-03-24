const js = `const https = require('https');

const params = JSON.stringify({
  name: "Sales Point #1",
  destinations: [
    { target: "+2347081234567" }
  ]
});

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/virtual_terminal',
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_SECRET_KEY',
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', error => {
  console.error(error);
});

req.write(params);
req.end();
`

const php = `<?php
  $url = "https://api.paystack.co/virtual_terminal";

  $fields = [
    "name" => "Sales Point #1", 
    "destinations" => [
      ["target" => "+2347081234567"]
    ]
  ];

  $fields_string = json_encode($fields);

  //open connection
  $ch = curl_init();
  
  //set the url, number of POST vars, POST data
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer YOUR_SECRET_KEY",
    "Content-Type: application/json",
  ));
  
  //So that curl_exec returns the contents of the cURL; rather than echoing it
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  //execute post
  $result = curl_exec($ch);
  echo $result;
?>
`

const sh = `curl "https://api.paystack.co/virtual_terminal"
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{
  "name": "Sales Point #1",
  "destinations": [
    {"target": "+2347081234567"}
  ]
}'
-X POST`

const json = `{
    "status": true,
    "message": "Virtual Terminal created",
    "data": {
      "id": 26677,
      "name": "Sales Point #1",
      "integration": 353514,
      "domain": "live",
      "code": "VT_L837PT5K",
      "paymentMethods": [
        {
          "dedicated_nuban_id": 26196910,
          "type": "dedicated_nuban",
          "account_number": "9964842038",
          "account_name": "Paystack Demo/Sales Point #1",
          "bank": "Paystack-Titan"
        }
      ],
      "active": true,
      "metadata": {
        "testing": "metadata"
      },
      "destinations": [
        {
          "target": "2347081234567",
          "type": "whatsapp",
          "name": null
        }
      ],
      "currency": "NGN"
    }
  }
  `

export {js, php, sh, json}
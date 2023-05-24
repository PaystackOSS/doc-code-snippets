const sh = `curl https://api.paystack.co/paymentrequest
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "customer": "CUS_5lgv9bc41uw15pb",
      "description": "Invoice for Damilola",
      "line_items": [
        {"name": "Tripod stand", "amount": "2000000", "quantity": 1},
        {"name": "Lenses", "amount": "300000", "quantity": 1},
        {"name": "White Bulbs", "amount": "50000", "quantity": 5}
      ]
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_5lgv9bc41uw15pb",
  "description": "Invoice for Damilola",
	"line_items": [
    {"name": "Tripod stand", "amount": "2000000", "quantity": 1},
    {"name": "Lenses", "amount": "300000", "quantity": 1},
    {"name": "White Bulbs", "amount": "50000", "quantity": 5}
  ]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/paymentrequest',
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
  $url = "https://api.paystack.co/paymentrequest";

  $fields = [
    "customer" => "CUS_5lgv9bc41uw15pb",
    "description" => "Invoice for Damilola",
    "line_items" => [
      ["name" => "Tripod stand", "amount" => "2000000", "quantity" => 1],
      ["name" => "Lenses", "amount" => "300000", "quantity" => 1],
      ["name" => "White Bulbs", "amount" => "50000", "quantity" => 5]
    ]
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
  "message": "Payment request created",
  "data": {
    "id": 6304434,
    "integration": 463433,
    "domain": "test",
    "amount": 2550000,
    "currency": "NGN",
    "due_date": "2021-05-18T00:00:00.000Z",
    "has_invoice": true,
    "invoice_number": 4,
    "description": "Invoice for Damilola",
    "line_items": [
      {
        "name": "Tripod stand",
        "amount": "2000000",
        "quantity": 1
      },
      {
        "name": "Lenses",
        "amount": "300000",
        "quantity": 1
      },
      {
        "name": "White Bulbs",
        "amount": "50000",
        "quantity": 5
      }
    ],
    "tax": [],
    "request_code": "PRQ_kwahak3i05nt1ds",
    "status": "pending",
    "paid": false,
    "metadata": null,
    "notifications": [],
    "offline_reference": "4634336304434",
    "customer": 28958104,
    "created_at": "2021-05-17T14:48:53.269Z"
  }
}`

export {sh, js, php, json}
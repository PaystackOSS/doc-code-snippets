const sh = `#!/bin/sh
url="https://api.paystack.co/order"
authorization="Authorization: Bearer YOUR_SECRET_KEY"
content_type="Content-Type: application/json"
data='{ 
  "customer": "CUS_abc123def456",
  "line_items": [
    {
      "product": 2196244,
      "quantity": 2
    }
  ]
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST
`

const js = `const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_abc123def456",
  "line_items": [
    {
      "product": 2196244,
      "quantity": 2
    }
  ]
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/order',
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
req.end()
`

const php = `<?php
  $url = "https://api.paystack.co/order";

  $fields = [
    'customer' => "CUS_abc123def456",
    'line_items' => [
      [
        'product' => 2196244,
        'quantity' => 2
      ]
    ]
  ];

  $fields_string = json_encode($fields);

  $ch = curl_init();
  
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Content-Type: application/json",
    "Cache-Control: no-cache",
  ));
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  $result = curl_exec($ch);
  echo $result;
?>
`

export {sh, js, php}
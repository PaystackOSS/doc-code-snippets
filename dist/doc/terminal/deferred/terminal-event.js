const sh = `curl https://api.paystack.co/terminal/:terminal_id/event
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ 
      "type": "invoice",
      "action": "process",
      "data": { 
        "id": 7895939, 
        "reference": 4634337895939
      }
    }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "type": "invoice",
  "action": "process",
  "data": { 
    "id": 7895939, 
    "reference": 4634337895939
  }
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/terminal/:terminal_id/event',
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
$url = "https://api.paystack.co/terminal/:terminal_id/event";

$fields = [
  "type" => "invoice",
  "action" => "process",
  "data" => [
    [
      "id" => 7895939, 
      "reference" => 4634337895939, 
    ]
  ]
];

$fields_string = http_build_query($fields);

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Authorization: Bearer SECRET_KEY",
  "Content-Type: application/json",
)
);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$json = json_decode($response);
curl_close($ch);
var_dump($json);
?>`

const json = `{
  "status": true,
  "message": "Event sent to Terminal",
  "data": {
      "id": "616d721e8c5cd40a0cdd54a6"
  }
}`

export {sh, js, php, json}
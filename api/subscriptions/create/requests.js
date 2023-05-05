const bash = `curl https://api.paystack.co/subscription
-H "Authorization: Bearer YOUR_SECRET_KEY"
-H "Content-Type: application/json"
-d '{ "customer": "CUS_xnxdt6s1zg1f4nx", "plan": "PLN_gx2wn530m0i3w3m" }'
-X POST`

const js = `const https = require('https')

const params = JSON.stringify({
  "customer": "CUS_xnxdt6s1zg1f4nx",
  "plan": "PLN_gx2wn530m0i3w3m"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/subscription',
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
  $url = "https://api.paystack.co/subscription";

  $fields = [
    'customer' => "CUS_xnxdt6s1zg1f4nx",
    'plan' => "PLN_gx2wn530m0i3w3m"
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

export { bash, js, php }
const sh = `#!/bin/sh
url="https://api.paystack.co/storefront/1559046/publish"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X POST
`

const js = `const https = require('https')

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/storefront/1559046/publish',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY'
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

req.end()
`

const php = `<?php
  $url = "https://api.paystack.co/storefront/1559046/publish";

  $ch = curl_init();
  
  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_HTTPHEADER, array(
    "Authorization: Bearer SECRET_KEY",
    "Cache-Control: no-cache",
  ));
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  $result = curl_exec($ch);
  echo $result;
?>
`

export {sh, js, php}
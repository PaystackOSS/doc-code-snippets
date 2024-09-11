const https = require('https')

const use_cursor = true;
const perPage = 50;
const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: `/transaction?use_cursor=${use_cursor}&perPage=${perPage}`,
  method: 'GET',
  headers: {
    Authorization: 'Bearer YOUR_SECRET_KEY'
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
})
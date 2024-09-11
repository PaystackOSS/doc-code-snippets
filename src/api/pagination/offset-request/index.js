const https = require('https')

const page = 1;
const perPage = 50;
const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: `/transaction?page=${page}&perPage=${perPage}`,
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
})
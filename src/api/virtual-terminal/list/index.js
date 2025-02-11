const https = require('https')

const options = {
hostname: 'api.paystack.co',
port: 443,
path: '/virtual_terminal',
method: 'GET',
headers: {
    Authorization: 'Bearer SECRET_KEY'
}
}

const req = https.request(options, res => {
let data = ''

res.on('data', (chunk) => {
    data += chunk
})

res.on('end', () => {
    console.log(JSON.parse(data))
})
})

req.on('error', error => {
console.error(error)
})

req.end()
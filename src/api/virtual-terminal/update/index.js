const https = require('https')

const params = JSON.stringify({
    "name": "New terminal name"
})

const options = {
hostname: 'api.paystack.co',
port: 443,
path: '/virtual_terminal/:code',
method: 'PUT',
headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(params)
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

req.write(params)
req.end()
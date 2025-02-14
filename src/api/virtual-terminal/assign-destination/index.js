const https = require('https')

const params = JSON.stringify({
    "destinations": [
        {
            "target": "+2341234567890",
            "name": "Another one"
        }
    ]
})

const options = {
hostname: 'api.paystack.co',
port: 443,
path: '/virtual_terminal/:code/destination/assign',
method: 'POST',
headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json',
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
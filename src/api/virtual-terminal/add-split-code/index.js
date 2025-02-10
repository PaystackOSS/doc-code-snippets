const https = require('https')

const params = JSON.stringify({
"split_code": "SPL_98WF13Zu8w5"
})

const options = {
hostname: 'api.paystack.co',
port: 443,
path: '/virtual_terminal/:code/split_code',
method: 'PUT',
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
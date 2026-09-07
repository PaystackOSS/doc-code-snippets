const crypto = require('crypto');
const secret = process.env.SECRET_KEY;
// Using Express
app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf;
    }
}));

app.post("/my/webhook/url", function(req, res) {
    //validate event
    const hash = crypto.createHmac('sha512', secret).update(req.rawBody).digest('hex');
    if (hash == req.headers['x-paystack-signature']) {
    // Retrieve the request's body
    const event = req.body;
    // Do something with event  
    }
    res.send(200);
});
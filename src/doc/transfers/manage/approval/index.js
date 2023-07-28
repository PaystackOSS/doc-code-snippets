// Using Express
function validateTransferRequest(request) {
    // validation logic
}

app.post('/approval', (req, res) => {
    const { body } = req
    const isValidTransferRequest = validateTransferRequest(body)

    if (!isValidTransferRequest) {
        return res.status(400).json({})
    }

    return res.status(200).json({})
})
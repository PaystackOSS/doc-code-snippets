const kt = `fun startPayment() {
  val accessCode = initializeTransactionOnServer()
  paymentSheet.launch(accessCode)
}`

const java = `// TODO: Add snippet`

export {kt, java}
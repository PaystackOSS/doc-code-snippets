fun startPayment() {
  val accessCode = initializeTransactionOnServer()
  paymentSheet.launch(accessCode)
}
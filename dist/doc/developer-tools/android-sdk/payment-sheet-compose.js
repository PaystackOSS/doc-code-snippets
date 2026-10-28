const kt = `@Composable
fun CheckoutScreen(paystack: Paystack, accessCode: String) {
  val paymentSheet = rememberPaymentSheet { result -> paymentComplete(result) }

  Button(onClick = { paymentSheet.launch(paystack, accessCode) }) {
    Text("Pay")
  }
}
`

export {kt}
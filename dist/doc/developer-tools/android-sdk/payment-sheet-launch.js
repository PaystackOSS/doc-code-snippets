const kt = `fun makePayment() {
  // Pass access_code from transaction initialize call on the server
  paymentSheet.launch(paystack, "ACCESS_CODE")
}
`

const java = `private void makePayment() {
  // Pass access_code from transaction initialize call on the server
  paymentSheet.launch(paystack, "ACCESS_CODE");
}
`

export {kt, java}
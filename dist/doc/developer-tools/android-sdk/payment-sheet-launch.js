const kt = `fun makePayment() {
  // Pass access_code from transaction initialize call on the server
  paymentSheet.launch("br6cgmvflhn3qtd")
}`

const java = `private void makePayment() {
  // Pass access_code from transaction initialize call on the server
  paymentSheet.launch("br6cgmvflhn3qtd");
}`

export {kt, java}
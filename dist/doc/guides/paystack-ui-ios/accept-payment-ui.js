const swift_ui = `paystack?.chargeUIButton(accessCode: "ACCESS_CODE", onComplete: paymentDone) {
  Text("Initiate Payment")
}`

const ui_kit = `@IBAction func payButtonTapped(_ sender: Any) {
  paystack?.presentChargeUI(on: self,
                              accessCode: "ACCESS_CODE",
                              onComplete: paymentDone)
}`

export {swift_ui, ui_kit}
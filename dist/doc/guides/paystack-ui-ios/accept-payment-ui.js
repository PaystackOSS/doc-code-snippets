const swift_ui = `paystack?.chargeUIButton(accessCode: "0peioxfhpn", onComplete: paymentDone) {
  Text("Initiate Payment")
}`

const ui_kit = `@IBAction func payButtonTapped(_ sender: Any) {
  paystack?.presentChargeUI(on: self,
                              accessCode: "0peioxfhpn",
                              onComplete: paymentDone)
}`

export {swift_ui, ui_kit}
const swift_ui = `import SwiftUI
import PaystackCore
import PaystackUI

struct PaymentView: View {
	let paystack = try? PaystackBuilder
			.newInstance
			.setKey("pk_domain_xxxxxxxx")
			.build()

	var body: some View {
		VStack(spacing: 8) {
			Text("Make Payemnt")

			paystack?.chargeUIButton(accessCode: "0peioxfhpn", onComplete: paymentDone) {
				Text("Initiate Payment")
			}
		}
		.padding()
	}

	func paymentDone(_ result: TransactionResult) {
		// Handle transaction result
		print(result)
	}
}

// ....`

const ui_kit = `import UIKit
import PaystackCore
import PaystackUI

class ViewController: UIViewController {
	let paystack = try? PaystackBuilder
			.newInstance
			.setKey("PUBLIC_KEY")
			.build()

	let paymentAccessCode = "ACCESS_CODE"

	@IBAction func launchPaymentTapped(_ sender: Any) {
		paystack?.presentChargeUI(on: self, accessCode: paymentAccessCode, onComplete: paymentCompleted)
	}

	func paymentCompleted(_ result: TransactionResult) {
		print("Payment completed. Result: \(result)")
	}

}`

export {swift_ui, ui_kit}
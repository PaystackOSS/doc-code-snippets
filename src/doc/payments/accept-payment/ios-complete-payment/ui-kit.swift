import UIKit
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

}
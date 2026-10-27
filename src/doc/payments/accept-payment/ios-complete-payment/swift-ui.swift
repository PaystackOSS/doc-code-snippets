import SwiftUI
import PaystackCore
import PaystackUI

struct PaymentView: View {
	let paystack = try? PaystackBuilder
			.newInstance
			.setKey("pk_domain_xxxxxxxx")
			.build()

	var body: some View {
		VStack(spacing: 8) {
			Text("Make Payment")

			paystack?.chargeUIButton(accessCode: "ACCESS_CODE", onComplete: paymentDone) {
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

// ....
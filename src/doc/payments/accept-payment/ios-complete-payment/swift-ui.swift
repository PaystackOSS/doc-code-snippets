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

// ....
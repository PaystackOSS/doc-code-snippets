import com.paystack.android_sdk.core.Paystack
import com.paystack.android_sdk.ui.paymentsheet.PaymentSheet
import com.paystack.android_sdk.ui.paymentsheet.PaymentSheetResult

private lateinit var paymentSheet: PaymentSheet

override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  
  //...

  Paystack.builder()
          .setPublicKey("pk_{your-public-key}")
          .build()
  paymentSheet = PaymentSheet(this, {your-callback-function})

  //...
}

// example paymentResult function
private fun paymentComplete(paymentSheetResult: PaymentSheetResult ) {
  val message = when (paymentSheetResult) {
    PaymentSheetResult.Cancelled -> "Cancelled"
    is PaymentSheetResult.Failed -> {
      Log.e("Something went wrong", paymentSheetResult.error.message.orEmpty(), paymentSheetResult.error)
      paymentSheetResult.error.message ?: "Failed"
    }

    is PaymentSheetResult.Completed -> {
      // Returns the transaction reference  PaymentCompletionDetails(reference={TransactionRef})
      Log.d("Payment successful", paymentSheetResult.paymentCompletionDetails.toString())
      "Successful"
    }
  }

  Toast.makeText(this, "Payment $message", Toast.LENGTH_SHORT).show()
}
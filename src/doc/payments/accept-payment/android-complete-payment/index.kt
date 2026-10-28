// other imports

import com.paystack.android.core.Paystack
import com.paystack.android.ui.paymentsheet.PaymentSheet
import com.paystack.android.ui.paymentsheet.PaymentSheetResult

class MainActivity : AppCompatActivity() {
    private lateinit var paymentSheet: PaymentSheet
    private val paystack = Paystack.builder()
        .setPublicKey("pk_test_xxxx")
        .build()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Other code snippets

        paymentSheet = PaymentSheet(this, ::paymentComplete)

    }

    private fun makePayment() {
        // Pass access_code from transaction initialize call
        paymentSheet.launch(paystack, "ACCESS_CODE")
    }


    private fun paymentComplete(paymentSheetResult: PaymentSheetResult) {
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
    }
}
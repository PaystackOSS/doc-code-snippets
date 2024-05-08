const kt = `// other imports

import com.paystack.android.core.Paystack
import com.paystack.android.ui.paymentsheet.PaymentSheet
import com.paystack.android.ui.paymentsheet.PaymentSheetResult

class MainActivity : AppCompatActivity() {
    private lateinit var paymentSheet: PaymentSheet

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Other code snippets

        Paystack.builder()
            .setPublicKey("pk_test_xxxx")
            .build()
        paymentSheet = PaymentSheet(this, ::paymentComplete)

    }

    private fun makePayment() {
        // Pass access_code from transaction initialize call
        paymentSheet.launch("br6cgmvflhn3qtd")
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
}`

const java = `// other imports

import com.paystack.android.core.Paystack;
import com.paystack.android.ui.paymentsheet.PaymentSheet;
import com.paystack.android.ui.paymentsheet.PaymentSheetResult;

public class MainActivity extends AppCompatActivity {

  private PaymentSheet paymentSheet;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // other snippets

    Paystack.builder()
        .setPublicKey("pk_test_xxxxx")
        .setLoggingEnabled(true)
        .build();

    paymentSheet = new PaymentSheet(this, this::paymentComplete);

  }

  private void makePayment() {
    // Pass access_code from transaction initialize call
    paymentSheet.launch("br6cgmvflhn3qtd");
  }

  private void paymentComplete(PaymentSheetResult paymentSheetResult) {
    String message;

    if (paymentSheetResult instanceof PaymentSheetResult.Cancelled) {
      message = "Cancelled";
    } else if (paymentSheetResult instanceof PaymentSheetResult.Failed) {
      PaymentSheetResult.Failed failedResult = (PaymentSheetResult.Failed) paymentSheetResult;
      Log.e("Payment failed",
          failedResult.getError().getMessage() != null ? failedResult.getError().getMessage() : "Failed",
          failedResult.getError());
      message = failedResult.getError().getMessage() != null ? failedResult.getError().getMessage() : "Failed";
    } else if (paymentSheetResult instanceof PaymentSheetResult.Completed) {
      Log.d("Payment successful",
          ((PaymentSheetResult.Completed) paymentSheetResult).getPaymentCompletionDetails().toString());
      message = "Successful";
    } else {
      message = "You shouldn't be here";
    }
  }
}`

export {kt, java}
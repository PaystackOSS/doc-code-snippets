// other imports

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
}
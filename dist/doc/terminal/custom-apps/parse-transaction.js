const kt = `val TRANSACTION_RESULT_CODE = 14
val TRANSACTION = "com.paystack.pos.TRANSACT"
val startActivityForResult: ActivityResultLauncher<Intent>  = registerForActivityResult(StartActivityForResult(), intentResultCallback())

private fun intentResultCallback(): ActivityResultCallback<ActivityResult> {

  return ActivityResultCallback { result: ActivityResult ->
    val resultCode = result.resultCode
    val intent = result.data
    val paystackIntentResponse: PaystackIntentResponse
    val terminalResponse: TerminalResponse

    if (resultCode == TRANSACTION_RESULT_CODE) {
      paystackIntentResponse = gson.fromJson(
        intent?.getStringExtra(TRANSACTION),
        PaystackIntentResponse::class.java
      )
      terminalResponse = paystackIntentResponse.intentResponse
      val transactionResponse: TransactionResponse = gson.fromJson(
        terminalResponse.data,
        TransactionResponse::class.java
      )

      Toast.makeText(
        applicationContext,
        "Transaction ref: " + transactionResponse.reference,
        Toast.LENGTH_SHORT
      ).show()
    }
    else {
      // handle invalid result code 
    }
  }
}`

const java = `ActivityResultLauncher<Intent> startActivityForResult = registerForActivityResult(
      new StartActivityForResult(), intentResultCallback());

private ActivityResultCallback<ActivityResult> intentResultCallback () {
  final int TRANSACTION_RESULT_CODE = 14;
  final String TRANSACTION = "com.paystack.pos.TRANSACT";

  return result -> {
    int resultCode = result.getResultCode();
    Intent intent = result.getData();
    PaystackIntentResponse paystackIntentResponse;
    TerminalResponse terminalResponse;

    if (resultCode == TRANSACTION_RESULT_CODE) {
      paystackIntentResponse = gson.fromJson(
        intent != null ? intent.getStringExtra(TRANSACTION) : null,
        PaystackIntentResponse.class
      );
      terminalResponse = paystackIntentResponse.getIntentResponse();
      TransactionResponse transactionResponse = gson.fromJson(
        terminalResponse.getData(),
        TransactionResponse.class
      );

      Toast.makeText(
        getApplicationContext(),
        "Transaction ref: " + transactionResponse.getReference(),
        Toast.LENGTH_SHORT
      ).show();
    }
    else {
      // handle invalid result code
    }
  };
}
`

export {kt, java}
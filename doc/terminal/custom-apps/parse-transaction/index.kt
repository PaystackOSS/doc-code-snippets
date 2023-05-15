val TRANSACTION_RESULT_CODE = 14
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
}
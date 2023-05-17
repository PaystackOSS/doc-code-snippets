val PARAMETERS_RESULT_CODE = 12
val PARAMETERS = "com.paystack.pos.PARAMETERS"
val startActivityForResult: ActivityResultLauncher<Intent>  = registerForActivityResult(StartActivityForResult(), intentResultCallback())

private fun intentResultCallback(): ActivityResultCallback<ActivityResult> {

  return ActivityResultCallback { result: ActivityResult ->
    val resultCode = result.resultCode
    val intent = result.data
    val paystackIntentResponse: PaystackIntentResponse
    val terminalResponse: TerminalResponse

    if (resultCode == PARAMETERS_RESULT_CODE) {
      paystackIntentResponse = gson.fromJson(
        intent?.getStringExtra(PARAMETERS),
        PaystackIntentResponse::class.java
      )
      terminalResponse = paystackIntentResponse.intentResponse
      val parameters: ParameterResponse = gson.fromJson(
        terminalResponse.data,
        ParameterResponse::class.java
      )
      Toast.makeText(
        applicationContext,
        "Terminal ID: " + parameters.terminalId,
        Toast.LENGTH_SHORT
      ).show()

      Toast.makeText(
        applicationContext,
        "Terminal Serial Number: " + parameters.serialNumber,
        Toast.LENGTH_SHORT
      ).show()
    }
    else {
      // handle invalid result code 
    }
  }
}
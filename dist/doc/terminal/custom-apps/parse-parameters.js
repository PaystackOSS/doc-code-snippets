const kt = `val PARAMETERS_RESULT_CODE = 12
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
}`

const java = `final Gson gson = new Gson();
ActivityResultLauncher<Intent> startActivityForResult = registerForActivityResult(
      new StartActivityForResult(), intentResultCallback());

private ActivityResultCallback<ActivityResult> intentResultCallback () {
  final int PARAMETERS_RESULT_CODE = 12;
  final String PARAMETERS = "com.paystack.pos.PARAMETERS";

  return result -> {
    int resultCode = result.getResultCode();
    Intent intent = result.getData();
    PaystackIntentResponse paystackIntentResponse;
    TerminalResponse terminalResponse;
    
    if(resultCode == PARAMETERS_RESULT_CODE) {
      paystackIntentResponse = gson.fromJson(
        intent != null ? intent.getStringExtra(PARAMETERS) : null,
        PaystackIntentResponse.class
      );
      terminalResponse = paystackIntentResponse.getIntentResponse();
      ParameterResponse parameters = gson.fromJson(
        terminalResponse.getData(),
        ParameterResponse.class
      );

      Toast.makeText(
        getApplicationContext(),
        "Terminal ID: " + parameters.getTerminalId(),
        Toast.LENGTH_SHORT
      ).show();

      Toast.makeText(
        getApplicationContext(),
        "Terminal Serial Number: " + parameters.getSerialNumber(),
        Toast.LENGTH_SHORT
      ).show();
    }
  };
}
`

export {kt, java}
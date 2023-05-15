final Gson gson = new Gson();
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

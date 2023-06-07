private void fetchParameters() {
  Intent parametersIntent = new Intent(Intent.ACTION_VIEW);
  parametersIntent.setPackage("com.paystack.pos");
  parametersIntent.putExtra("com.paystack.pos.PARAMETERS", "true");

  // implementation below
  startActivityForResult.launch(parametersIntent);
}

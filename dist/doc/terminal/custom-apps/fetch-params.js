const kt = `private fun fetchParameters(){
  val parametersIntent = Intent(Intent.ACTION_VIEW).apply {
    setPackage("com.paystack.pos")
    putExtra("com.paystack.pos.PARAMETERS", "true")
  }

  // implementation below
  startActivityForResult.launch(parametersIntent)
}
`

const java = `private void fetchParameters() {
  Intent parametersIntent = new Intent(Intent.ACTION_VIEW);
  parametersIntent.setPackage("com.paystack.pos");
  parametersIntent.putExtra("com.paystack.pos.PARAMETERS", "true");

  // implementation below
  startActivityForResult.launch(parametersIntent);
}
`

export {kt, java}
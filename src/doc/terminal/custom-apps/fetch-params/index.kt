private fun fetchParameters(){
  val parametersIntent = Intent(Intent.ACTION_VIEW).apply {
    setPackage("com.paystack.pos")
    putExtra("com.paystack.pos.PARAMETERS", "true")
  }

  // implementation below
  startActivityForResult.launch(parametersIntent)
}

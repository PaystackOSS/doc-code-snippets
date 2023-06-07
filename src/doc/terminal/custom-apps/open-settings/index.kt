private fun openSettings() {
  val settingsIntent = Intent(Intent.ACTION_VIEW).apply {
    setPackage("com.paystack.pos")
    putExtra("com.paystack.pos.SETTINGS",  "true")
  }

  startActivity(settingsIntent)
}

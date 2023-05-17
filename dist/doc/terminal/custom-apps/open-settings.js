const kt = `private fun openSettings() {
  val settingsIntent = Intent(Intent.ACTION_VIEW).apply {
    setPackage("com.paystack.pos")
    putExtra("com.paystack.pos.SETTINGS",  "true")
  }

  startActivity(settingsIntent)
}
`

const java = `private void openSettings() {
  Intent settingsIntent = new Intent(Intent.ACTION_VIEW);
  settingsIntent.setPackage("com.paystack.pos");
  settingsIntent.putExtra("com.paystack.pos.SETTINGS", "true");

  startActivity(settingsIntent);
}
`

export {kt, java}
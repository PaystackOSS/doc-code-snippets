private void openSettings() {
  Intent settingsIntent = new Intent(Intent.ACTION_VIEW);
  settingsIntent.setPackage("com.paystack.pos");
  settingsIntent.putExtra("com.paystack.pos.SETTINGS", "true");

  startActivity(settingsIntent);
}

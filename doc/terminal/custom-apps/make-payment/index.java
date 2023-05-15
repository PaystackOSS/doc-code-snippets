final Gson gson = new Gson();

private void makePayment() {
  TransactionRequest transactionRequest = new TransactionRequest();
  Map<String, Object> metadata = new HashMap<>();
  CustomField field1 = new CustomField(
    "Extra Details",
    "extra_details",
    "4675"
  );
  List<CustomField> customFields = new ArrayList<>();

  customFields.add(field1);
  metadata.put("custom_fields", customFields);

  transactionRequest.setAmount(2000);
  transactionRequest.setMetadata(metadata);


  Intent transactionIntent = new Intent(Intent.ACTION_VIEW);
  transactionIntent.setPackage("com.paystack.pos");
  transactionIntent.putExtra("com.paystack.pos.TRANSACT", gson.toJson(transactionRequest));

  // implementation below
  startActivityForResult.launch(transactionIntent);
}
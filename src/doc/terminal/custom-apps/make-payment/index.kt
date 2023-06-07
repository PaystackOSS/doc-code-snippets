val gson = Gson()

private fun makePayment() {
  val transactionRequest = TransactionRequest(
    amount = 2000,
    offlineReference = null,
    supplementaryReceiptData = null,
    metadata = mapOf(
      "custom_fields" to listOf(
        CustomField(
          display_name = "Extra Detail",
          variable_name = "extra_detail",
          value = "1234"
        )
      )
    )
  )

  val transactionIntent = Intent(Intent.ACTION_VIEW).apply {
    setPackage("com.paystack.pos")
    putExtra("com.paystack.pos.TRANSACT", gson.toJson(transactionRequest))
  }

  // implementation below
  startActivityForResult.launch(transactionIntent)
}

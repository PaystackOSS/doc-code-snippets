const kt = `val sheetConfig = PaymentSheetConfig.builder()
  .setThemeMode(PaymentSheetConfig.ThemeMode.DARK)
  .setDisplayAudience(PaymentSheetConfig.DisplayAudience.MERCHANT_FACING)
  .build()

paymentSheet.launch(paystack, "ACCESS_CODE", sheetConfig)
`

const java = `PaymentSheetConfig sheetConfig = PaymentSheetConfig.builder()
        .setThemeMode(PaymentSheetConfig.ThemeMode.DARK)
        .setDisplayAudience(PaymentSheetConfig.DisplayAudience.MERCHANT_FACING)
        .build();

paymentSheet.launch(paystack, "ACCESS_CODE", sheetConfig);
`

export {kt, java}
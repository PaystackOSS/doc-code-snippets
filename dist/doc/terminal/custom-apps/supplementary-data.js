const kt = `data class SupplementaryReceiptData(
  val developerSuppliedText: String?,
  val developerSuppliedImageUrlPath: String?,
  val barcodeOrQrcodeImageText: String?,
  val textImageType: TextImageFormat?
)
`

const java = `class SupplementaryReceiptData {
  private String developerSuppliedText;
  private String developerSuppliedImageUrlPath;
  private String barcodeOrQrcodeImageText;
  private TextImageFormat textImageType;

  public SupplementaryReceiptData() {
  }

  public void setDeveloperSuppliedText(String developerSuppliedText) {
    this.developerSuppliedText = developerSuppliedText;
  }

  public void setDeveloperSuppliedImageUrlPath(String developerSuppliedImageUrlPath) {
    this.developerSuppliedImageUrlPath = developerSuppliedImageUrlPath;
  }

  public void setBarcodeOrQrcodeImageText(String barcodeOrQrcodeImageText) {
    this.barcodeOrQrcodeImageText = barcodeOrQrcodeImageText;
  }

  public void setTextImageType(TextImageFormat textImageType) {
    this.textImageType = textImageType;
  }
}`

export {kt, java}
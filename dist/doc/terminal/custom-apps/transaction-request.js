const kt = `data class TransactionRequest(
  val amount: Int,
  val offlineReference: String?,
  val supplementaryReceiptData: SupplementaryReceiptData?,
  val metadata: Map<String, Any>?
)
`

const java = `public class TransactionRequest {

  private int amount;
  private String offlineReference;
  private SupplementaryReceiptData supplementaryReceiptData;
  private Map<String, Object> metadata;

  public TransactionRequest() {
  }

  public void setAmount(int amount) {
    this.amount = amount;
  }

  public void setOfflineReference(String offlineReference) {
    this.offlineReference = offlineReference;
  }

  public void setSupplementaryReceiptData(SupplementaryReceiptData supplementaryReceiptData) {
    this.supplementaryReceiptData = supplementaryReceiptData;
  }

  public void setMetadata(Map<String, Object> metadata) {
    this.metadata = metadata;
  }
}`

export {kt, java}
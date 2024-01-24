// TransactionRequest.java
import java.util.Map;

public class TransactionRequest {
  private int amount;
  private Map<String, Object> metadata;

  public TransactionRequest() {
  }

  public void setAmount(int amount) {
    this.amount = amount;
  }

  public void setMetadata(Map<String, Object> metadata) {
    this.metadata = metadata;
  }
}
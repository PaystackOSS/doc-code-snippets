const paystack_intent_response = `// PaystackIntentResponse.java
public class PaystackIntentResponse {
  private final String intentkey;
  private final int intentResponseCode;
  private final TerminalResponse intentResponse;

  public PaystackIntentResponse(String intentkey, int intentResponseCode, TerminalResponse intentResponse) {
    this.intentkey = intentkey;
    this.intentResponseCode = intentResponseCode;
    this.intentResponse = intentResponse;
  }

  public String getIntentkey() {
    return intentkey;
  }

  public int getIntentResponseCode() {
    return intentResponseCode;
  }

  public TerminalResponse getIntentResponse() {
    return intentResponse;
  }
}`

const terminal_response = `// TerminalResponse.java
public class TerminalResponse {
  private final String statusCode;
  private final String message;
  private final String data;

  public TerminalResponse(String statusCode, String message, String data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  public String getStatusCode() {
    return statusCode;
  }

  public String getMessage() {
    return message;
  }

  public String getData() {
    return data;
  }
}`

const transaction_request = `// TransactionRequest.java
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
}`

const transaction_response = `// TransactionResponse.java
import com.google.gson.annotations.SerializedName;

public class TransactionResponse {
  private final String id;
  private final int amount;
  private final String reference;
  private final String status;
  private final String currency;
  @SerializedName("country_code")
  private final String countryCode;
  @SerializedName("paid_at")
  private final String paidAt;
  private final String terminal;

  public TransactionResponse(
      String id, int amount, String reference, String status,
      String currency, String countryCode, String paidAt, String terminal) {
    this.id = id;
    this.amount = amount;
    this.reference = reference;
    this.status = status;
    this.currency = currency;
    this.countryCode = countryCode;
    this.paidAt = paidAt;
    this.terminal = terminal;
  }

  public String getId() {
    return id;
  }

  public int getAmount() {
    return amount;
  }

  public String getReference() {
    return reference;
  }

  public String getStatus() {
    return status;
  }

  public String getCurrency() {
    return currency;
  }

  public String getCountryCode() {
    return countryCode;
  }

  public String getPaidAt() {
    return paidAt;
  }

  public String getTerminal() {
    return terminal;
  }
}`

export {paystack_intent_response, terminal_response, transaction_request, transaction_response}
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
}
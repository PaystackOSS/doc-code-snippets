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
}

import com.google.gson.annotations.SerializedName;

public class ParameterResponse {
  @SerializedName("terminal_id")
  private final String terminalId;
  @SerializedName("serial_number")
  private final String serialNumber;

  public ParameterResponse(String terminalId, String serialNumber) {
    this.terminalId = terminalId;
    this.serialNumber = serialNumber;
  }

  public String getTerminalId() {
    return terminalId;
  }

  public String getSerialNumber() {
    return serialNumber;
  }
}

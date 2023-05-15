import com.google.gson.annotations.SerializedName

data class ParametersResponse(
  @SerializedName("terminal_id")
  val terminalId: String,
  @SerializedName("serial_number")
  val serialNumber: String
)

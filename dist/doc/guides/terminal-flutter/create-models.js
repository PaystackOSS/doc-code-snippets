const paystack_intent_response = `// PaystackIntentResponse.kt
data class PaystackIntentResponse (
    val intentKey: String,
    val intentResponseCode: Int,
    val intentResponse: TerminalResponse
)`

const terminal_response = `// TerminalResponse.kt
data class TerminalResponse(
    val statusCode: String,
    val message: String,
    val data: String
)`

const transaction_request = `// TransactionRequest.kt
data class TransactionRequest(
    val amount: Int,
    val offlineReference: String?,
    val supplementaryReceiptData: SupplementaryReceiptData?,
    val metadata: Map<String, Any>?
)

data class SupplementaryReceiptData(
    val developerSuppliedText: String?,
    val developerSuppliedImageUrlPath: String?,
    val barcodeOrQrcodeImageText: String?,
    val textImageType: TextImageFormat?
)

enum class TextImageFormat {
    QR_CODE,
    AZTEC_BARCODE
}`

const transaction_response = `// TransactionResponse.kt
import com.google.gson.annotations.SerializedName

data class TransactionResponse(
    val id: String?,
    val amount: Int?,
    val reference: String?,
    val status: String?,
    val currency: String?,
    @SerializedName("country_code")
    val countryCode: String?,
    @SerializedName("paid_at")
    val paidAt: String?,
    val terminal: String?
)`

export {paystack_intent_response, terminal_response, transaction_request, transaction_response}
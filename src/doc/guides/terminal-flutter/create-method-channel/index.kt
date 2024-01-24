// other imports
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class MainActivity: FlutterActivity() {
	private val CHANNEL = "com.example.sample_registration/payment"
	// other code snippet
	override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
      super.configureFlutterEngine(flutterEngine)

      MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
          call, result ->
        if (call.method == "makePayment") {
          val amount = call.argument("amount") ?: 0
          makePayment(amount)

          result.success(transactionStatus)
        } else {
          result.notImplemented()
        }
    }
  }
	
	// other code snippet
}
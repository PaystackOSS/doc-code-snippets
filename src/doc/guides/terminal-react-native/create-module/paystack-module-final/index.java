import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;

public class PaystackModule extends ReactContextBaseJavaModule {

  private final Gson gson = new Gson();
  private Callback mCallback;

  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
      PaystackIntentResponse paystackIntentResponse;
      TerminalResponse terminalResponse;

      paystackIntentResponse = gson.fromJson(
          data != null ? data.getStringExtra("com.paystack.pos.TRANSACT") : null,
          PaystackIntentResponse.class);
      terminalResponse = paystackIntentResponse.getIntentResponse();
      TransactionResponse transactionResponse = gson.fromJson(
          terminalResponse.getData(),
          TransactionResponse.class);
      mCallback.invoke(transactionResponse.getReference());
    }
  };

  PaystackModule(ReactApplicationContext context) {
    super(context);

    context.addActivityEventListener(mActivityEventListener);
  }

  @Override
  public String getName() {
    return "PaystackModule";
  }

  @ReactMethod
  public void makePayment(int amount, Callback callback) {
    TransactionRequest transactionRequest = new TransactionRequest();
    transactionRequest.setAmount(amount);

    Activity currentActivity = getCurrentActivity();
    mCallback = callback;

    try {
      final Intent transactionIntent = new Intent(Intent.ACTION_VIEW);
      transactionIntent.setPackage("com.paystack.pos");
      transactionIntent.putExtra("com.paystack.pos.TRANSACT",
          gson.toJson(transactionRequest));
      currentActivity.startActivityForResult(transactionIntent, 1);
    } catch (Exception e) {
      Log.d("PaystackModule", "Error: " + e.getMessage());
    }
  }
}
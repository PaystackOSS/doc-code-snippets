const java = `import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
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

  // the rest of the code previously added
}`

export {java}
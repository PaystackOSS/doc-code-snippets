const java = `import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class PaystackModule extends ReactContextBaseJavaModule {

  PaystackModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "PaystackModule";
  }
}`

export {java}
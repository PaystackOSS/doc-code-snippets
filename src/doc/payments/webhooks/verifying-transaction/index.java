package hmacexample;

import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import org.json.JSONException;
import org.json.JSONObject;

public class HMacExample {

  public static void main(String[] args) throws UnsupportedEncodingException, InvalidKeyException, NoSuchAlgorithmException, JSONException {
    //first you verify that this request came from paystack
      
    String key = "YOUR_SECRET_KEY"; //replace with your paystack secret_key
    
    String rawJson = "{\\"paystack\\":\\"request\\",\\"body\":\\"to_string\\"}";
    JSONObject body = new JSONObject(rawJson);
    String result = "";
    String HMAC_SHA512 = "HmacSHA512";
    String xpaystackSignature = ""; //put in the request's header value for x-paystack-signature
    
    byte [] byteKey = key.getBytes("UTF-8");
    SecretKeySpec keySpec = new SecretKeySpec(byteKey, HMAC_SHA512);
    Mac sha512_HMAC = Mac.getInstance(HMAC_SHA512);      
    sha512_HMAC.init(keySpec);
    byte [] mac_data = sha512_HMAC.
    doFinal(body.getBytes("UTF-8"));
    result = DatatypeConverter.printHexBinary(mac_data);
    if(result.toLowerCase().equals(xpaystackSignature)) {
      // you can trust the event, it came from paystack
      // respond with the http 200 response immediately before attempting to process the response
      //retrieve the request body, and deliver value to the customer
    }else{
      // this isn't from Paystack, ignore it
    }  
  }
}
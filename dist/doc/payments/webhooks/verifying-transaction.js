const js = `const crypto = require('crypto');
const secret = process.env.SECRET_KEY;
// Using Express
app.post("/my/webhook/url", function(req, res) {
    //validate event
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
    if (hash == req.headers['x-paystack-signature']) {
    // Retrieve the request's body
    const event = req.body;
    // Do something with event  
    }
    res.send(200);
});`

const php = `<?php
  // only a post with paystack signature header gets our attention
  if ((strtoupper($_SERVER['REQUEST_METHOD']) != 'POST' ) || !array_key_exists('HTTP_X_PAYSTACK_SIGNATURE', $_SERVER) ) 
      exit();

  // Retrieve the request's body
  $input = @file_get_contents("php://input");
  define('PAYSTACK_SECRET_KEY','SECRET_KEY');

  // validate event do all at once to avoid timing attack
  if($_SERVER['HTTP_X_PAYSTACK_SIGNATURE'] !== hash_hmac('sha512', $input, PAYSTACK_SECRET_KEY))
      exit();

  http_response_code(200);

  // parse event (which is json string) as object
  // Do something - that will not take long - with $event
  $event = json_decode($input);

  exit();
?>`

const java = `package hmacexample;

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
}`

const cs = `using System;
using System.Security.Cryptography;
using System.Text;
using Newtonsoft.Json.Linq;

namespace HMacExample
{
  class Program {
    static void Main(string[] args) {
      String key = "YOUR_SECRET_KEY"; //replace with your paystack secret_key
      String jsonInput = "{\"paystack\":\"request\",\"body\":\"to_string\"}"; //the json input
      String inputString = Convert.ToString(new JValue(jsonInput));

      String result = "";
      byte[] secretkeyBytes = Encoding.UTF8.GetBytes(key);
      byte[] inputBytes = Encoding.UTF8.GetBytes(inputString);
      using (var hmac = new HMACSHA512(secretkeyBytes))
      {
          byte[] hashValue = hmac.ComputeHash(inputBytes);
          result = BitConverter.ToString(hashValue).Replace("-", string.Empty);;
      }
      Console.WriteLine(result);

      String xpaystackSignature = ""; //put in the request's header value for x-paystack-signature
  
      if(result.ToLower().Equals(xpaystackSignature)) {
          // you can trust the event, it came from paystack
          // respond with the http 200 response immediately before attempting to process the response
          //retrieve the request body, and deliver value to the customer
      } else {
          // this isn't from Paystack, ignore it
      }
    }
  }
}`

export {js, php, java, cs}
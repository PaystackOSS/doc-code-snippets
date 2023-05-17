using System;
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
}
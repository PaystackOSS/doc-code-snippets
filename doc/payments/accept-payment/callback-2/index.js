callback: function(response) {
  window.location = "http://www.yoururl.com/verify_transaction.php?reference=" + response.reference;
};
// On the redirected page, you can call Paystack's verify endpoint.

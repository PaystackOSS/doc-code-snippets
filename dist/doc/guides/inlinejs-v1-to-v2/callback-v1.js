const js = `let paystack = PaystackPop.setup({
  // other params
  callback: function(transaction){
    // Payment complete! Reference: ' + response.reference;
  },
  onClose: function(){
    // user closed popup
  }
});

paystack.openIframe();`

export {js}
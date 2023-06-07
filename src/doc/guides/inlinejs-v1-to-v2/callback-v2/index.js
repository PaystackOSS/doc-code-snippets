const paystack = new PaystackPop();
paystack.newTransaction({
  // other params

  onSuccess: (transaction) => { 
    // Payment complete! Reference: transaction.reference 
  },
  onCancel: () => {
    // user closed popup
  }
});
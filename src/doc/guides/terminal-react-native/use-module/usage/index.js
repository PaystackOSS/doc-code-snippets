const onPress = async () => {
  PaystackModule.makePayment(3000, transactionReference => {
    console.log('transaction ref: ', transactionReference);
  });
};
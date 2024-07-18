const popup = new Paystack()

popup.checkout({
  key: 'pk_domain_xxxxxx',
  email: 'sample@email.com',
  amount: 23400,
  onSuccess: (transaction) => {
    console.log(transaction);
  },
  onLoad: (response) => {
    console.log("onLoad: ", response);
  },
  onCancel: () => {
    console.log("onCancel");
  },
  onError: (error) => {
    console.log("Error: ", error.message);
  }
})
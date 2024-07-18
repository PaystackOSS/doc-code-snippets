const popup = new Paystack()

popup.newTransaction({
  key: 'pk_domain_xxxxxx',
  email: 'plan@email.com',
  amount: 40000,
  planCode: 'PLN_l6aglbqzebn32c6',
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
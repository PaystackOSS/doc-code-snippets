const popup = new Paystack()

popup.newTransaction({
  key: 'pk_domain_xxxxxx',
  email: 'multi@split.com',
  amount: 98540,
  split_code: 'SPL_RYUUL4u1hP',
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
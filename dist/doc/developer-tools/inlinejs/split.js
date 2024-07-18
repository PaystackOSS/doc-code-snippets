const js = `const popup = new Paystack()

popup.newTransaction({
  key: 'pk_domain_xxxxxx',
  email: 'sample@email.com',
  amount: 45000,
  subaccountCode: 'ACCT_dskvlw3y3dsvkmt',
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
    console.log(`Error: ${error.message}`);
  }
})`

export {js}
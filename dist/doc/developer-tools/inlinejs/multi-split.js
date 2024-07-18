const js = `const popup = new Paystack()

popup.newTransaction({
  key: 'pk_domain_xxxxxx',
  email: 'split@dynamic.com',
  amount: 35650,
  currency: 'NGN',
  split: {
    type: 'percentage',
    bearer_type: 'account',
    subaccounts: [
      {
        subaccount: 'ACCT_dskvlw3y3dsvkmt',
        share: 30
      },
      {
        subaccount: 'ACCT_eg4sob4590pq9vb',
        share: 20
      }
    ]
  },
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
})`

export {js}
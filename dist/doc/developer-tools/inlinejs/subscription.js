const js = `const popup = new Paystack()

popup.newTransaction({
  key: 'pk_domain_xxxxxx',
  email: 'sub@main.com',
  amount: 20000,
  planInterval: 'weekly',
  onSuccess: (transaction) => {
    console.log(transaction);
  },
  onLoad: (response) => {
    console.log("onLoad: ", response);
  },
  onCancel: () => {
    console.log("onCancel");
  },
  onError: () => {
    console.log("onError");
  }
})`

export {js}
const js = `const paystackPop = new PaystackPop();

async function payWithPaystack() {
  await paystack.checkout({
    key: 'pk_domain_xxxxx',
    email: 'example@email.com',
    amount: 10000,
    onSuccess: (transaction) => { 
      console.log("Transaction: ", transaction)
    },
    onCancel: () => {
      console.log("Pop up closed!")
    }
  });
}`

export {js}
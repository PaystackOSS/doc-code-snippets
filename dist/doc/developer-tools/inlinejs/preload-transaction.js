const js = `const popup = new Paystack()

const loadPopup = popup.preloadTransaction({
  key: 'pk_domain_xxxxxx',
  email: 'testuser@paystack.com',
  amount: 10000,
  currency: "NGN"
});

document.querySelector("#make-payment").onclick = loadPopup;`

export {js}
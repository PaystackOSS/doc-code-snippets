const js = `const popup = new Paystack()

const onElementsMount = (elements) => {
  if (elements && elements.applePay) {
    document.querySelector("#pay-button").innerText = "More Payment Options";
  }
}

try {
  await popup.paymentRequest({
    key: 'pk_domain_xxxxxx',
    email: 'testuser@paystack.com',
    amount: 10000,
    currency: "NGN",
    container: 'payment-request-buttons',
    loadPaystackCheckoutButton: 'pay-button',
    styles: {
      theme: 'dark',
      applePay: {
        width: '100%',
        height: '50px',
        borderRadius: '3px',
        type: 'plain',
        locale: 'en'
      }
    },
    onElementsMount,
  });
} catch (error) {

}`

export {js}
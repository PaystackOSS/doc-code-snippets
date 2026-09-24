const js = `const popup = new Paystack()

const onElementsMount = (elements) => {
  if (elements && (elements.applePay || elements.googlePay)) {
    document.querySelector("#pay-button").innerText = "More Payment Options";
  }
}

try {
  await popup.paymentRequest({
    key: 'pk_domain_xxxxxx',
    email: 'testuser@paystack.com',
    amount: 10000,
    currency: "NGN",
    channels: ['card', 'google_pay'],
    container: 'payment-request-buttons',
    loadPaystackCheckoutButton: 'pay-button',
    styles: {
      theme: 'dark',
      orientation: 'horizontal',
      applePay: {
        width: '100%',
        height: '50px',
        borderRadius: '3px',
        type: 'plain',
        locale: 'en'
      },
      googlePay: {
        width: '100%',
        height: '50px',
        borderRadius: '3px',
        buttonType: 'plain',
        buttonColor: 'black',
        buttonSizeMode: 'fill'
      }
    },
    onElementsMount,
  });
} catch (error) {

}`

export {js}
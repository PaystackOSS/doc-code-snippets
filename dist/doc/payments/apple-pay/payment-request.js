const js = `const paystackPop = new PaystackPop();

await paystackPop.paymentRequest({
  key: 'pk_domain_xxxxx', // Replace with your public key
  email: 'CUSTOMER_EMAIL',
  amount: amount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
  currency: 'NGN', // Use NGN for Naira or USD for US Dollars
  ref: 'YOUR_REFERENCE', // Replace with a reference you generated
  container: 'paystack-apple-pay', // ID of div to mount payment button elements
  loadPaystackCheckoutButton: 'paystack-other-channels', // ID of button to trigger opening Paystack checkout (optional)
  style: { 
    theme: 'dark', // 'light' or 'dark'
    applePay: { 
      margin: '10px',
      padding: '10px',
      width: '100%',
      borderRadius: '5px',
      type: 'pay', // Default value is 'pay'. See other apple pay button types here https://developer.apple.com/documentation/apple_pay_on_the_web/displaying_apple_pay_buttons_using_css
      locale: 'en'
    } 
  }, // custom styles for button elements
  onSuccess(response) {
    // handle success
  },
  onError() {
    // handle error
  },
  onCancel() {
    // handle cancel
  },
  onElementsMount(elements) { // { applePay: true } or null
    
  }
});
`

export {js}
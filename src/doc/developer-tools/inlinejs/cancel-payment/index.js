const popup = new Paystack()

const transaction = popup.newTransaction({
  key: 'pk_domain_xxxxx', // Replace with your public key
  email: "demo@example.com",
  amount: 10000,
  onLoad: (transaction) => {
    window.clearInterval(redirectTimer);
  }
});

let timeElapsed = 0;
const timeLimit = 2;
const redirectURL = 'https://your.redirecturl.com';
const redirectTimer = setInterval(() => {
  timeElapsed += 1;
  if (timeElapsed === timeLimit) {
    popup.cancelTransaction(transaction.id);
    window.location.href = redirectURL;
  }
}, 1000);
public class CheckoutActivity extends AppCompatActivity {

    // ...

    @Override
    protected void onCreate(Bundle savedInstanceState) { ... }

    private void initializeFormVariables() { ... }

    private void performCharge() {
        Intent intent = getIntent();

        String cardNumber = mCardNumber.getEditText().getText().toString();
        String cardExpiry = mCardExpiry.getEditText().getText().toString();
        String cvv = mCardCVV.getEditText().getText().toString();

        String[] cardExpiryArray = cardExpiry.split("/");
        int expiryMonth = Integer.parseInt(cardExpiryArray[0]);
        int expiryYear = Integer.parseInt(cardExpiryArray[1]);
        int amount = intent.getIntExtra(getString(R.string.meal_name), 0);
        amount *= 100;

        Card card = new Card(cardNumber, expiryMonth, expiryYear, cvv);

        Charge charge = new Charge();
        charge.setAmount(amount);
        charge.setEmail("customer@email.com");
        charge.setCard(card);

        PaystackSdk.chargeCard(this, charge, new Paystack.TransactionCallback() {
            @Override
            public void onSuccess(Transaction transaction) {
                parseResponse(transaction.getReference());
            }

            @Override
            public void beforeValidate(Transaction transaction) {
                Log.d("Main Activity", "beforeValidate: " + transaction.getReference());
            }

            @Override
            public void onError(Throwable error, Transaction transaction) {
                Log.d("Main Activity", "onError: " + error.getLocalizedMessage());
                Log.d("Main Activity", "onError: " + error);
            }

        });
    }
}

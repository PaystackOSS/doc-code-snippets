const kt = `class CheckoutActivity : AppCompatActivity() {

    // ...

    override fun onCreate(savedInstanceState: Bundle?) { ... }

    private fun initializeFormVariables() { ... }

    private fun performCharge() {
        val cardNumber = mCardNumber.editText!!.text.toString()
        val cardExpiry = mCardExpiry.editText!!.text.toString()
        val cvv = mCardCVV.editText!!.text.toString()

        val cardExpiryArray = cardExpiry.split("/").toTypedArray()
        val expiryMonth = cardExpiryArray[0].toInt()
        val expiryYear = cardExpiryArray[1].toInt()
        var amount = intent.getIntExtra(getString(R.string.meal_name), 0)
        amount *= 100

        val card = Card(cardNumber, expiryMonth, expiryYear, cvv)

        val charge = Charge()
        charge.amount = amount
        charge.email = "customer@email.com"
        charge.card = card

        PaystackSdk.chargeCard(this, charge, object : TransactionCallback {
            override fun onSuccess(transaction: Transaction) {
                parseResponse(transaction.reference)
            }

            override fun beforeValidate(transaction: Transaction) {
                Log.d("Main Activity", "beforeValidate: " + transaction.reference)
            }

            override fun onError(error: Throwable, transaction: Transaction) {
                Log.d("Main Activity", "onError: " + error.localizedMessage)
                Log.d("Main Activity", "onError: $error")
            }
        })
    }
}`

const java = `public class CheckoutActivity extends AppCompatActivity {

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
`

export {kt, java}
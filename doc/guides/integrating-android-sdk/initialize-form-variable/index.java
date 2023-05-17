public class CheckoutActivity extends AppCompatActivity {

    private TextInputLayout mCardNumber;
    private TextInputLayout mCardExpiry;
    private TextInputLayout mCardCVV;

	@Override
    protected void onCreate(Bundle savedInstanceState) { ... }

	private void initializeFormVariables() {
        mCardNumber = findViewById(R.id.til_card_number);
        mCardExpiry = findViewById(R.id.til_card_expiry);
        mCardCVV = findViewById(R.id.til_card_cvv);

		// this is used to add a forward slash (/) between the cards expiry month
        // and year (11/21). After the month is entered, a forward slash is added
        // before the year

        Objects.requireNonNull(mCardExpiry.getEditText()).addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

            }

            @Override
            public void afterTextChanged(Editable s) {
                if(s.toString().length() == 2 && !s.toString().contains("/")) {
                    s.append("/");
                }
            }
        });

        Button button = findViewById(R.id.btn_make_payment);
        button.setOnClickListener(v -> performCharge());
    }
}

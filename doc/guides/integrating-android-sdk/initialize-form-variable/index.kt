class CheckoutActivity : AppCompatActivity() {
    private lateinit var mCardNumber: TextInputLayout
    private lateinit var mCardExpiry: TextInputLayout
    private lateinit var mCardCVV: TextInputLayout

    override fun onCreate(savedInstanceState: Bundle?) { ... }

	private fun initializeFormVariables() {
        mCardNumber = findViewById(R.id.til_card_number)
        mCardExpiry = findViewById(R.id.til_card_expiry)
        mCardCVV = findViewById(R.id.til_card_cvv)

		// this is used to add a forward slash (/) between the cards expiry month
        // and year (11/21). After the month is entered, a forward slash is added
        // before the year
        mCardExpiry.editText!!.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, 
							start: Int, count: Int, after: Int) {

            }

            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {

            }

            override fun afterTextChanged(s: Editable?) {
                if (s.toString().length == 2 && !s.toString().contains("/")) {
                    s!!.append("/")
                }
            }

        })
        
        val button = findViewById<Button>(R.id.btn_make_payment)
        button.setOnClickListener { v: View? -> performCharge() }
    }
}
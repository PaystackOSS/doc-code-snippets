const kt = `val cardNumber = mCardNumber.editText!!.text.toString()
val cardExpiry = mCardExpiry.editText!!.text.toString()
val cvv = mCardCVV.editText!!.text.toString()

val cardExpiryArray = cardExpiry.split("/").toTypedArray()
val expiryMonth = cardExpiryArray[0].toInt()
val expiryYear = cardExpiryArray[1].toInt()
var amount = intent.getIntExtra(getString(R.string.meal_name), 0)
amount *= 100 // convert amount to kobo`

const java = `Intent intent = getIntent();

String cardNumber = mCardNumber.getEditText().getText().toString();
String cardExpiry = mCardExpiry.getEditText().getText().toString();
String cvv = mCardCVV.getEditText().getText().toString();

String[] cardExpiryArray = cardExpiry.split("/");
int expiryMonth = Integer.parseInt(cardExpiryArray[0]);
int expiryYear = Integer.parseInt(cardExpiryArray[1]);
int amount = intent.getIntExtra(getString(R.string.meal_name), 0);
amount *= 100; // convert amount to kobo
`

export {kt, java}
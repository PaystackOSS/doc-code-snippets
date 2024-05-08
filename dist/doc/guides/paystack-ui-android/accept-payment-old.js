const kt = `val cardNumber = "4084084084084081"
val expiryMonth = "11"
val expiryYear = "24"
val cvv = "408"

val card = Card(cardNumber, expiryMonth, expiryYear, cvv)

val charge = Charge()
charge.card = card`

const java = `String cardNumber = "4084084084084081";
int expiryMonth = 11; //any month in the future
int expiryYear = 18; // any year in the future. '2018' would work also! 
String cvv = "408";  // cvv of the test card
   
Card card = new Card(cardNumber, expiryMonth, expiryYear, cvv);
if (card.isValid()) {
   // charge card
} else {
  //do something
}

Charge charge = new Charge(); 
charge.setCard(card);`

export {kt, java}
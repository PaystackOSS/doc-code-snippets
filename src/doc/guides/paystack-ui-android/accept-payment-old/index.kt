val cardNumber = "4084084084084081"
val expiryMonth = "11"
val expiryYear = "24"
val cvv = "408"

val card = Card(cardNumber, expiryMonth, expiryYear, cvv)

val charge = Charge()
charge.card = card
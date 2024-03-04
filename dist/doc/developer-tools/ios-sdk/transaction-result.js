const swift = `func paymentDone(_ result: TransactionResult) {
  switch (result){
    case .completed(let details):
      print("Transaction completed with reference: \(details.reference)")
    case .cancelled:
      print("Transaction was cancelled")
    case .error(error: let error, reference: let reference):
      print("An error occured: \(error.message) with reference: \(String(describing: reference))")
  }
}`

export {swift}
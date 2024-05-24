const from = `PSTCKAPIClient.shared().chargeCard(cardParams, forTransaction: transactionParams, on: self,
    didEndWithError: { (error, reference) -> Void in
      print(error)
    }, didRequestValidation: { (reference) -> Void in
      // an OTP was requested, transaction has not yet succeeded
      print("Validation: \(reference)")
    }, didTransactionSuccess: { (reference) -> Void in
      // transaction may have succeeded, please verify on backend
      print("Success: \(reference)")
  })`

const to = `func paymentDone(_ result: TransactionResult) {
  switch (result){
    case .completed(let details):
      print("Transaction completed with reference: \(details.reference)")
    case .cancelled:
      print("Transaction was cancelled")
    case .error(error: let error, reference: let reference):
      print("An error occured: \(error.message) with reference: \(String(describing: reference))")
  }
}`

export {from, to}
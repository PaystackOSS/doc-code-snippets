PSTCKAPIClient.shared().chargeCard(cardParams, forTransaction: transactionParams, on: self,
    didEndWithError: { (error, reference) -> Void in
      print(error)
    }, didRequestValidation: { (reference) -> Void in
      // an OTP was requested, transaction has not yet succeeded
      print("Validation: \(reference)")
    }, didTransactionSuccess: { (reference) -> Void in
      // transaction may have succeeded, please verify on backend
      print("Success: \(reference)")
  })
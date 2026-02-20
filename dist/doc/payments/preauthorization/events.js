const preauthorization_capture_failed = `{
  "event": "preauthorization.capture.failed",
  "data": {
    "amount": 1000,
    "authorization": {
      "account_name": null,
      "authorization_code": "AUTH_ove5p6reju",
      "bank": "NEDBANK",
      "bin": "492213",
      "brand": "visa",
      "card_type": "visa credit",
      "channel": "card",
      "country_code": "ZA",
      "exp_month": "03",
      "exp_year": "2025",
      "last4": "6658",
      "reusable": true,
      "signature": "SIG_9bg7BgE0xiRxNVsil7Yo"
    },
    "captured_amount": "1000",
    "captured_at": null,
    "currency": "ZAR",
    "customer": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@test.com",
      "customer_code": "CUS_yqcuukj44ype5u1",
      "phone": "01142272921",
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "domain": "live",
    "expired_at": null,
    "fees": 0,
    "message": null,
    "id": 3099,
    "merchant_id": 412922,
    "merchant_name": "Test Business",
    "metadata": null,
    "reference": "atyntuup5bec03e",
    "status": "capture_failed",
    "transaction_id": "1504264401",
    "expiry_date": "2023-11-19T23:28:52.000Z",
    "expire_action": "release"
  }
}`

const preauthorization_capture_success = `{
  "event": "preauthorization.capture.success",
  "data": {
    "amount": 1000,
    "authorization": {
      "account_name": null,
      "authorization_code": "AUTH_ove5p6reju",
      "bank": "NEDBANK",
      "bin": "492213",
      "brand": "visa",
      "card_type": "visa credit",
      "channel": "card",
      "country_code": "ZA",
      "exp_month": "03",
      "exp_year": "2025",
      "last4": "6658",
      "reusable": true,
      "signature": "SIG_9bg7BgE0xiRxNVsil7Yo"
    },
    "captured_amount": "1000",
    "captured_at": "2023-11-10T11:58:44.000Z",
    "currency": "ZAR",
    "customer": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@test.com",
      "customer_code": "CUS_yqcuukj44ype5u1",
      "phone": "01142272921",
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "domain": "live",
    "fees": 0,
    "message": "Approved",
    "id": 3099,
    "merchant_id": 412922,
    "merchant_name": "Test Business",
    "metadata": null,
    "reference": "atyntuup5bec03e",
    "status": "captured",
    "transaction_id": "1504264401",
    "expiry_date": null,
    "expire_action": "capture"
  }
}`

const preauthorization_release_failed = `{
  "event": "preauthorization.release.failed",
  "data": {
    "amount": 1000,
    "authorization": {
      "account_name": null,
      "authorization_code": "AUTH_ove5p6reju",
      "bank": "NEDBANK",
      "bin": "492213",
      "brand": "visa",
      "card_type": "visa credit",
      "channel": "card",
      "country_code": "ZA",
      "exp_month": "03",
      "exp_year": "2025",
      "last4": "6658",
      "reusable": true,
      "signature": "SIG_9bg7BgE0xiRxNVsil7Yo"
    },
    "captured_amount": null,
    "captured_at": null,
    "currency": "ZAR",
    "customer": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@test.com",
      "customer_code": "CUS_yqcuukj44ype5u1",
      "phone": "01142272921",
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "domain": "live",
    "fees": 100,
    "message": "Release failed",
    "id": 3118,
    "merchant_id": 412922,
    "merchant_name": "Test Business",
    "metadata": null,
    "reference": "h15lgtld6kqlkcm",
    "status": "release_failed",
    "transaction_id": null,
    "expiry_date": "2023-11-19T23:28:52.000Z"
  }
}`

const preauthorization_release_success = `{
  "event": "preauthorization.release.success",
  "data": {
    "amount": 1000,
    "authorization": {
      "account_name": null,
      "authorization_code": "AUTH_ove5p6reju",
      "bank": "NEDBANK",
      "bin": "492213",
      "brand": "visa",
      "card_type": "visa credit",
      "channel": "card",
      "country_code": "ZA",
      "exp_month": "03",
      "exp_year": "2025",
      "last4": "6658",
      "reusable": true,
      "signature": "SIG_9bg7BgE0xiRxNVsil7Yo"
    },
    "captured_amount": null,
    "captured_at": null,
    "currency": "ZAR",
    "customer": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@test.com",
      "customer_code": "CUS_yqcuukj44ype5u1",
      "phone": "01142272921",
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "domain": "live",
    "expired_at": "2023-11-17T12:46:58.000Z",
    "fees": 100,
    "message": "Release success",
    "id": 3101,
    "merchant_id": 412922,
    "merchant_name": "Test Business",
    "metadata": null,
    "reference": "pre_11b0qw12",
    "status": "released",
    "transaction_id": null,
    "expiry_date": "2024-11-19T23:28:52.000Z",
    "expire_action": "release"
  }
}`

const preauthorization_reserve_success = `{
  "event": "preauthorization.reserve.success",
  "data": {
    "id": 543,
    "domain": "live",
    "status": "authorized",
    "reference": "pre_9gjnu6dc",
    "amount": 1000,
    "message": "Approved",
    "currency": "ZAR",
    "metadata": null,
    "fees": 100,
    "authorization": {
      "authorization_code": "AUTH_vbvd4qti3m",
      "bin": "455027",
      "last4": "8016",
      "exp_month": "11",
      "exp_year": "2026",
      "channel": "card",
      "card_type": "visa credit",
      "bank": "ABSA BANK LIMITED, SOUTH AFRICA",
      "country_code": "ZA",
      "brand": "visa",
      "reusable": true,
      "signature": "SIG_1zl7r116ONxGlRFXKn0C",
      "account_name": null
    },
    "customer": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@test.com",
      "customer_code": "CUS_yqcuukj44ype5u1",
      "phone": "",
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "merchant_id": 1077497,
    "merchant_name": "Test Business",
    "transaction_id": null,
    "captured_at": null,
    "captured_amount": null,
    "expiry_date": "2023-11-19T23:28:52.000Z",
    "expire_action": "release"
  }
}`

export {preauthorization_capture_failed, preauthorization_capture_success, preauthorization_release_failed, preauthorization_release_success, preauthorization_reserve_success}
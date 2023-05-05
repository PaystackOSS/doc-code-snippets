const refund_pending = `{
  "event": "refund.pending",
  "data": {
    "status": "pending",
    "transaction_reference": "tvunjbbd_412829_4b18075d_c7had",
    "refund_reference": null,
    "amount": "10000",
    "currency": "NGN",
    "processor": "instant-transfer",
    "customer": {
      "first_name": "Drew",
      "last_name": "Berry",
      "email": "demo@email.com"
    },
    "integration": 412829,
    "domain": "live"
  }
}`;

const refund_processing = `{
  "event": "refund.processing",
  "data": {
    "status": "processing",
    "transaction_reference": "tvunjbbd_412829_4b18075d_c7had",
    "refund_reference": null,
    "amount": "10000",
    "currency": "NGN",
    "processor": "instant-transfer",
    "customer": {
      "first_name": "Drew",
      "last_name": "Berry",
      "email": "demo@email.com"
    },
    "integration": 412829,
    "domain": "live"
  }
}`;

const refund_processed = `{
  "event": "refund.processed",
  "data": {
    "status": "processed",
    "transaction_reference": "T2154954_412829_3be32076_6lcg3",
    "refund_reference": "132013318360",
    "amount": "5000",
    "currency": "NGN",
    "processor": "mpgs_zen",
    "customer": {
      "first_name": "Damilola",
      "last_name": "Kwabena",
      "email": "damilola@email.com"
    },
    "integration": 412829,
    "domain": "live"
  }
}`;

const refund_failed = `{
  "event": "refund.failed",
  "data": {
    "status": "failed",
    "transaction_reference": "T9171231_412325_3be2736c_n6tml",
    "refund_reference": "TRF_9vgfawjnoz58uxy",
    "amount": 20000,
    "currency": "NGN",
    "processor": "instant-transfer",
    "customer": {
      "first_name": "Tobi",
      "last_name": "Digz",
      "email": "tobi@mail.com"
    },
    "integration": 412325,
    "domain": "live"
  }
}`;

export { refund_pending, refund_processing, refund_processed, refund_failed };

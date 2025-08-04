const charge_dispute_create = `{
	"event": "charge.dispute.create",
	"data": {
		"id": 358950,
		"refund_amount": 5800,
		"currency": "NGN",
		"status": "awaiting-merchant-feedback",
		"resolution": null,
		"domain": "live",
		"transaction": {
			"id": 896467688,
			"domain": "live",
			"status": "success",
			"reference": "v3mjfgbnc19v97x",
			"amount": 5800,
			"message": null,
			"gateway_response": "Approved",
			"paid_at": "2020-11-24T13:45:57.000Z",
			"created_at": "2020-11-24T13:45:57.000Z",
			"channel": "card",
			"currency": "NGN",
			"ip_address": null,
			"metadata": "",
			"log": null,
			"fees": 53,
			"fees_split": null,
			"authorization": {},
			"customer": {
				"international_format_phone": null
			},
			"plan": {},
			"subaccount": {},
			"split": {},
			"order_id": null,
			"paidAt": "2020-11-24T13:45:57.000Z",
			"requested_amount": 5800,
			"pos_transaction_data": null
		},
		"transaction_reference": null,
		"category": "chargeback",
		"customer": {
			"id": 5406463,
			"first_name": "John",
			"last_name": "Doe",
			"email": "example@test.com",
			"customer_code": "CUS_6wbxh6689vt0n7s",
			"phone": "08000000000",
			"metadata": {},
			"risk_action": "allow",
			"international_format_phone": null
		},
		"bin": "123456",
		"last4": "1234",
		"dueAt": "2020-11-25T18:00:00.000Z",
		"resolvedAt": null,
		"evidence": null,
		"attachments": null,
		"note": null,
		"history": [
			{
				"status": "pending",
				"by": "example@test.com",
				"createdAt": "2020-11-24T13:46:57.000Z"
			}
		],
		"messages": [
			{
				"sender": "example@test.com",
				"body": "Customer complained about debit without value",
				"createdAt": "2020-11-24T13:46:57.000Z"
			}
		],
		"created_at": "2020-11-24T13:46:57.000Z",
		"updated_at": "2020-11-24T18:00:02.000Z"
	}
}`

const charge_dispute_remind = `{
	"event": "charge.dispute.remind",
	"data": {
		"id": 358950,
		"refund_amount": 5800,
		"currency": "NGN",
		"status": "awaiting-merchant-feedback",
		"resolution": null,
		"domain": "live",
		"transaction": {
			"id": 896467688,
			"domain": "live",
			"status": "success",
			"reference": "v3mjfgbnc19v97x",
			"amount": 5800,
			"message": null,
			"gateway_response": "Approved",
			"paid_at": "2020-11-24T13:45:57.000Z",
			"created_at": "2020-11-24T13:45:57.000Z",
			"channel": "card",
			"currency": "NGN",
			"ip_address": null,
			"metadata": "",
			"log": null,
			"fees": 53,
			"fees_split": null,
			"authorization": {},
			"customer": {
				"international_format_phone": null
			},
			"plan": {},
			"subaccount": {},
			"split": {},
			"order_id": null,
			"paidAt": "2020-11-24T13:45:57.000Z",
			"requested_amount": 5800,
			"pos_transaction_data": null
		},
		"transaction_reference": null,
		"category": "chargeback",
		"customer": {
			"id": 5406463,
			"first_name": "John",
			"last_name": "Doe",
			"email": "example@test.com",
			"customer_code": "CUS_6wbxh6689vt0n7s",
			"phone": "08000000000",
			"metadata": {},
			"risk_action": "allow",
			"international_format_phone": null
		},
		"bin": "123456",
		"last4": "1234",
		"dueAt": "2020-11-25T18:00:00.000Z",
		"resolvedAt": null,
		"evidence": null,
		"attachments": null,
		"note": null,
		"history": [
			{
				"status": "pending",
				"by": "example@test.com",
				"createdAt": "2020-11-24T13:46:57.000Z"
			}
		],
		"messages": [
			{
				"sender": "example@test.com",
				"body": "Customer complained about debit without value",
				"createdAt": "2020-11-24T13:46:57.000Z"
			}
		],
		"created_at": "2020-11-24T13:46:57.000Z",
		"updated_at": "2020-11-24T18:00:02.000Z"
	}
}`

const charge_dispute_resolve = `{
	"event": "charge.dispute.resolve",
	"data": {
		"id": 358949,
		"refund_amount": 5700,
		"currency": "NGN",
		"status": "resolved",
		"resolution": "auto-accepted",
		"domain": "live",
		"transaction": {
			"id": 896467592,
			"domain": "live",
			"status": "reversed",
			"reference": "5qm4pv2mxs9rltp",
			"amount": 5700,
			"message": null,
			"gateway_response": "Approved",
			"paid_at": "2020-11-24T13:45:53.000Z",
			"created_at": "2020-11-24T13:45:52.000Z",
			"channel": "card",
			"currency": "NGN",
			"ip_address": null,
			"metadata": "",
			"log": null,
			"fees": 52,
			"fees_split": null,
			"authorization": {},
			"customer": {
				"international_format_phone": null
			},
			"plan": {},
			"subaccount": {},
			"split": {},
			"order_id": null,
			"paidAt": "2020-11-24T13:45:53.000Z",
			"requested_amount": 5700,
			"pos_transaction_data": null
		},
		"transaction_reference": null,
		"category": "chargeback",
		"customer": {
			"id": 5406463,
			"first_name": "John",
			"last_name": "Doe",
			"email": "john@example.com",
			"customer_code": "CUS_6wbxh6689vt0n7s",
			"phone": "0800000000",
			"metadata": {},
			"risk_action": "allow",
			"international_format_phone": null
		},
		"bin": "123456",
		"last4": "1234",
		"dueAt": "2020-11-24T14:00:00.000Z",
		"resolvedAt": "2020-11-24T14:00:02.000Z",
		"evidence": null,
		"attachments": null,
		"note": null,
		"history": [
			{
				"status": "pending",
				"by": "example@test.com",
				"createdAt": "2020-11-24T13:46:36.000Z"
			}
		],
		"messages": [
			{
				"sender": "example@test.com",
				"body": "Customer complained about debit without value",
				"createdAt": "2020-11-24T13:46:36.000Z"
			}
		],
		"created_at": "2020-11-24T13:46:36.000Z",
		"updated_at": "2020-11-24T14:00:02.000Z"
	}
}`

const customer_id_failed = `{
  "event":"customeridentification.failed",
  "data":{
    "customer_id":82796315,
    "customer_code":"CUS_XXXXXXXXXXXXXXX",
    "email":"email@email.com",
    "identification":{
      "country":"NG",
      "type":"bank_account",
      "bvn":"123*****456",
      "account_number":"012****345",
      "bank_code":"999991"
    },
    "reason":"Account number or BVN is incorrect"
  }
}`

const customer_id_success = `{
  "event": "customeridentification.success",
  "data": {
    "customer_id": "9387490384",
    "customer_code": "CUS_xnxdt6s1zg1f4nx",
    "email": "bojack@horsinaround.com",
    "identification": {
      "country": "NG",
      "type": "bvn",
      "value": "200*****677"
    }
  }
}`

const dva_assign_failed = `{
  "event":"dedicatedaccount.assign.failed",
  "data":{
    "customer":{
      "id": 100110,
      "first_name":"John",
      "last_name":"Doe",
      "email":"johndoe@test.com",
      "customer_code":"CUS_hcekca0j0bbg2m4",
      "phone":"+2348100000000",
      "metadata":{},
      "risk_action":"default",
      "international_format_phone":"+2348100000000"
    },
    "dedicated_account":null,
    "identification":{
      "status":"failed"
    }
  }
}`

const dva_assign_success = `{
	"event": "dedicatedaccount.assign.success",
	"data": {
		"customer": {
			"id": 100110,
			"first_name": "John",
			"last_name": "Doe",
			"email": "johndoe@test.com",
			"customer_code": "CUS_hp05n9khsqcesz2",
			"phone": "+2348100000000",
			"metadata": {},
			"risk_action": "default",
			"international_format_phone": "+2348100000000"
		},
		"dedicated_account": {
			"bank": {
				"name": "Test Bank",
				"id": 20,
				"slug": "test-bank"
			},
			"account_name": "PAYSTACK/John Doe",
			"account_number": "1234567890",
			"assigned": true,
			"currency": "NGN",
			"metadata": null,
			"active": true,
			"id": 987654,
			"created_at": "2022-06-21T17:12:40.000Z",
			"updated_at": "2022-08-12T14:02:51.000Z",
			"assignment": {
				"integration": 100123,
				"assignee_id": 100110,
				"assignee_type": "Customer",
				"expired": false,
				"account_type": "PAY-WITH-TRANSFER-RECURRING",
				"assigned_at": "2022-08-12T14:02:51.614Z",
				"expired_at": null
			}
		},
		"identification": {
			"status": "success"
		}
	}
}`

const invoice_created = `{
  "event": "invoice.create",
  "data": {
    "domain": "test",
    "invoice_code": "INV_thy2vkmirn2urwv",
    "amount": 50000,
    "period_start": "2018-12-20T15:00:00.000Z",
    "period_end": "2018-12-19T23:59:59.000Z",
    "status": "success",
    "paid": true,
    "paid_at": "2018-12-20T15:00:06.000Z",
    "description": null,
    "authorization": {
      "authorization_code": "AUTH_9246d0h9kl",
      "bin": "408408",
      "last4": "4081",
      "exp_month": "12",
      "exp_year": "2020",
      "channel": "card",
      "card_type": "visa DEBIT",
      "bank": "Test Bank",
      "country_code": "NG",
      "brand": "visa",
      "reusable": true,
      "signature": "SIG_iCw3p0rsG7LUiQwlsR3t",
      "account_name": "BoJack Horseman"
    },
    "subscription": {
      "status": "active",
      "subscription_code": "SUB_fq7dbe8tju0i1v8",
      "email_token": "3a1h7bcu8zxhm8k",
      "amount": 50000,
      "cron_expression": "0 * * * *",
      "next_payment_date": "2018-12-20T00:00:00.000Z",
      "open_invoice": null
    },
    "customer": {
      "id": 46,
      "first_name": "Asample",
      "last_name": "Personpaying",
      "email": "asam@ple.com",
      "customer_code": "CUS_00w4ath3e2ukno4",
      "phone": "",
      "metadata": null,
      "risk_action": "default"
    },
    "transaction": {
      "reference": "9cfbae6e-bbf3-5b41-8aef-d72c1a17650g",
      "status": "success",
      "amount": 50000,
      "currency": "NGN"
    },
    "created_at": "2018-12-20T15:00:02.000Z"
  }
}`

const invoice_failed = `{
  "event": "invoice.payment_failed",
  "data": {
   "domain": "test",
   "invoice_code": "INV_3kfmqw48ca7b48k",
   "amount": 10000,
   "period_start": "2019-03-25T14:00:00.000Z",
   "period_end": "2019-03-24T23:59:59.000Z",
   "status": "pending",
   "paid": false,
   "paid_at": null,
   "description": null,
   "authorization": {
     "authorization_code": "AUTH_fmmpvpvphp",
     "bin": "506066",
     "last4": "6666",
     "exp_month": "03",
     "exp_year": "2033",
     "channel": "card",
     "card_type": "verve ",
     "bank": "TEST BANK",
     "country_code": "NG",
     "brand": "verve",
     "reusable": true,
     "signature": "SIG_bx0C6uIiqFHnoGOxTDWr",
     "account_name": "BoJack Horseman"
   },
   "subscription": {
     "status": "active",
     "subscription_code": "SUB_f7ct8g01mtcjf78",
     "email_token": "gptk4apuohyyjsg",
     "amount": 10000,
     "cron_expression": "0 * * * *",
     "next_payment_date": "2019-03-25T00:00:00.000Z",
     "open_invoice": "INV_3kfmqw48ca7b48k"
   },
   "customer": {
     "id": 6910995,
     "first_name": null,
     "last_name": null,
     "email": "xxx@gmail.com",
     "customer_code": "CUS_3p3ylxyf07605kx",
     "phone": null,
     "metadata": null,
     "risk_action": "default"
   },
   "transaction": {},
   "created_at": "2019-03-25T14:00:03.000Z"
  }
}`

const invoice_updated = `{
  "event": "invoice.update",
  "data": {
    "domain": "test",
    "invoice_code": "INV_kmhuaaur5c9ruh2",
    "amount": 50000,
    "period_start": "2016-04-19T07:00:00.000Z",
    "period_end": "2016-05-19T07:00:00.000Z",
    "status": "success",
    "paid": true,
    "paid_at": "2016-04-19T06:00:09.000Z",
    "description": null,
    "authorization": {
      "authorization_code": "AUTH_jhbldlt1",
      "bin": "539923",
      "last4": "2071",
      "exp_month": "10",
      "exp_year": "2017",
      "card_type": "MASTERCARD DEBIT",
      "bank": "FIRST BANK OF NIGERIA PLC",
      "country_code": "NG",
      "brand": "MASTERCARD",
      "account_name": "BoJack Horseman"
    },
    "subscription": {
      "status": "active",
      "subscription_code": "SUB_l07i1s6s39nmytr",
      "amount": 50000,
      "cron_expression": "0 0 19 * *",
      "next_payment_date": "2016-05-19T07:00:00.000Z",
      "open_invoice": null
    },
    "customer": {
      "first_name": "BoJack",
      "last_name": "Horseman",
      "email": "bojack@horsinaround.com",
      "customer_code": "CUS_xnxdt6s1zg1f4nx",
      "phone": "",
      "metadata": {},
      "risk_action": "default"
    },
    "transaction": {
      "reference": "rdtmivs7zf",
      "status": "success",
      "amount": 50000,
      "currency": "NGN"
    },
    "created_at": "2016-04-16T13:45:03.000Z"
  }
}`

const payment_request_pending = `{
  "event": "paymentrequest.pending",
  "data": {
    "id": 1089700,
    "domain": "test",
    "amount": 10000000,
    "currency": "NGN",
    "due_date": null,
    "has_invoice": false,
    "invoice_number": null,
    "description": "Pay up",
    "pdf_url": null,
    "line_items": [],
    "tax": [],
    "request_code": "PRQ_y0paeo93jh99mho",
    "status": "pending",
    "paid": false,
    "paid_at": null,
    "metadata": null,
    "notifications": [],
    "offline_reference": "3365451089700",
    "customer": 7454223,
    "created_at": "2019-06-21T15:25:42.000Z"
  }
}`

const payment_request_success = `{
  "event": "paymentrequest.success",
  "data": {
    "id": 1089700,
    "domain": "test",
    "amount": 10000000,
    "currency": "NGN",
    "due_date": null,
    "has_invoice": false,
    "invoice_number": null,
    "description": "Pay up now",
    "pdf_url": null,
    "line_items": [],
    "tax": [],
    "request_code": "PRQ_y0paeo93jh99mho",
    "status": "success",
    "paid": true,
    "paid_at": "2019-06-21T15:26:10.000Z",
    "metadata": null,
    "notifications": [
      {
        "sent_at": "2019-06-21T15:25:42.452Z",
        "channel": "email"
      }
    ],
    "offline_reference": "3365451089700",
    "customer": 7454223,
    "created_at": "2019-06-21T15:25:42.000Z"
  }
}`

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
}`

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
}`

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
}`

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
}`

const subscription_created = `{
  "event": "subscription.create",
  "data": {
    "domain": "test",
    "status": "active",
    "subscription_code": "SUB_vsyqdmlzble3uii",
    "amount": 50000,
    "cron_expression": "0 0 28 * *",
    "next_payment_date": "2016-05-19T07:00:00.000Z",
    "open_invoice": null,
    "createdAt": "2016-03-20T00:23:24.000Z",
    "plan": {
      "name": "Monthly retainer",
      "plan_code": "PLN_gx2wn530m0i3w3m",
      "description": null,
      "amount": 50000,
      "interval": "monthly",
      "send_invoices": true,
      "send_sms": true,
      "currency": "NGN"
    },
    "authorization": {
      "authorization_code": "AUTH_96xphygz",
      "bin": "539983",
      "last4": "7357",
      "exp_month": "10",
      "exp_year": "2017",
      "card_type": "MASTERCARD DEBIT",
      "bank": "GTBANK",
      "country_code": "NG",
      "brand": "MASTERCARD",
      "account_name": "BoJack Horseman"
    },
    "customer": {
      "first_name": "BoJack",
      "last_name": "Horseman",
      "email": "bojack@horsinaround.com",
      "customer_code": "CUS_xnxdt6s1zg1f4nx",
      "phone": "",
      "metadata": {},
      "risk_action": "default"
    },
    "created_at": "2016-10-01T10:59:59.000Z"
  }
}`

const subscription_disabled = `{
  "event": "subscription.disable",
  "data": {
    "domain": "test",
    "status": "complete",
    "subscription_code": "SUB_vsyqdmlzble3uii",
    "email_token": "ctt824k16n34u69",
    "amount": 300000,
    "cron_expression": "0 * * * *",
    "next_payment_date": "2020-11-26T15:00:00.000Z",
    "open_invoice": null,
    "plan": {
        "id": 67572,
        "name": "Monthly retainer",
        "plan_code": "PLN_gx2wn530m0i3w3m",
        "description": null,
        "amount": 50000,
        "interval": "monthly",
        "send_invoices": true,
        "send_sms": true,
        "currency": "NGN"
    },
    "authorization": {
      "authorization_code": "AUTH_96xphygz",
      "bin": "539983",
      "last4": "7357",
      "exp_month": "10",
      "exp_year": "2017",
      "card_type": "MASTERCARD DEBIT",
      "bank": "GTBANK",
      "country_code": "NG",
      "brand": "MASTERCARD",
      "account_name": "BoJack Horseman"
    },
    "customer": {
      "first_name": "BoJack",
      "last_name": "Horseman",
      "email": "bojack@horsinaround.com",
      "customer_code": "CUS_xnxdt6s1zg1f4nx",
      "phone": "",
      "metadata": {},
      "risk_action": "default"
    },
    "created_at": "2020-11-26T14:45:06.000Z"
  }
}`

const subscription_expiring_card = `{
	"event": "subscription.expiring_cards",
	"data": [
		{
			"expiry_date": "12/2021",
			"description": "visa ending with 4081",
			"brand": "visa",
			"subscription": {
				"id": 94729,
				"subscription_code": "SUB_lejj927x2kxciw1",
				"amount": 44000,
				"next_payment_date": "2021-11-11T00:00:01.000Z",
				"plan": {
					"interval": "monthly",
					"id": 22637,
					"name": "Premium Service (Monthly)",
					"plan_code": "PLN_pfmwz75o021slex"
				}
			},
			"customer": {
				"id": 7808239,
				"first_name": "Bojack",
				"last_name": "Horseman",
				"email": "bojackhoresman@gmail.com",
				"customer_code": "CUS_8v6g420rc16spqw"
			}
		}
	]
}`

const subscription_not_renew = `{
  "event": "subscription.not_renew",
  "data": {
    "id": 317617,
    "domain": "test",
    "status": "non-renewing",
    "subscription_code": "SUB_d638sdiWAio7jnl",
    "email_token": "086x99rmqc4qhcw",
    "amount": 120000,
    "cron_expression": "0 0 8 10 *",
    "next_payment_date": null,
    "open_invoice": null,
    "integration": 116430,
    "plan": {
      "id": 103028,
      "name": "(1,200) - annually - [1 - Year]",
      "plan_code": "PLN_tlknnnzfi4w2evu",
      "description": "Subscription not_renewed for sub@notrenew.com",
      "amount": 120000,
      "interval": "annually",
      "send_invoices": true,
      "send_sms": true,
      "currency": "NGN"
    },
    "authorization": {
      "authorization_code": "AUTH_5ftfl9xrl0",
      "bin": "424242",
      "last4": "4081",
      "exp_month": "06",
      "exp_year": "2023",
      "channel": "card",
      "card_type": "mastercard debit",
      "bank": "Guaranty Trust Bank",
      "country_code": "NG",
      "brand": "mastercard",
      "reusable": true,
      "signature": "SIG_biPYZE4PgDCQUJMIT4sE",
      "account_name": null
    },
    "customer": {
      "id": 57199167,
      "first_name": null,
      "last_name": null,
      "email": "sub@notrenew.com",
      "customer_code": "CUS_8gbmdpvn12c67ix",
      "phone": null,
      "metadata": null,
      "risk_action": "default",
      "international_format_phone": null
    },
    "invoices": [],
    "invoices_history": [],
    "invoice_limit": 0,
    "split_code": null,
    "most_recent_invoice": null,
    "created_at": "2021-10-08T14:50:39.000Z"
  }
}`

const transaction_successful = `{  
  "event":"charge.success",
  "data": {  
    "id":302961,
    "domain":"live",
    "status":"success",
    "reference":"qTPrJoy9Bx",
    "amount":10000,
    "message":null,
    "gateway_response":"Approved by Financial Institution",
    "paid_at":"2016-09-30T21:10:19.000Z",
    "created_at":"2016-09-30T21:09:56.000Z",
    "channel":"card",
    "currency":"NGN",
    "ip_address":"41.242.49.37",
    "metadata":0,
    "log":{  
      "time_spent":16,
      "attempts":1,
      "authentication":"pin",
      "errors":0,
      "success":false,
      "mobile":false,
      "input":[],
      "channel":null,
      "history":[  
        {  
          "type":"input",
          "message":"Filled these fields: card number, card expiry, card cvv",
          "time":15
        },
        {  
          "type":"action",
          "message":"Attempted to pay",
          "time":15
        },
        {  
          "type":"auth",
          "message":"Authentication Required: pin",
          "time":16
        }
      ]
    },
    "fees":null,
    "customer":{  
      "id":68324,
      "first_name":"BoJack",
      "last_name":"Horseman",
      "email":"bojack@horseman.com",
      "customer_code":"CUS_qo38as2hpsgk2r0",
      "phone":null,
      "metadata":null,
      "risk_action":"default"
    },
    "authorization":{  
      "authorization_code":"AUTH_f5rnfq9p",
      "bin":"539999",
      "last4":"8877",
      "exp_month":"08",
      "exp_year":"2020",
      "card_type":"mastercard DEBIT",
      "bank":"Guaranty Trust Bank",
      "country_code":"NG",
      "brand":"mastercard",
      "account_name": "BoJack Horseman"
    },
    "plan":{}
  } 
}`

const transfer_failed = `{
  "event": "transfer.failed",
  "data": {
    "amount": 200000,
    "currency": "NGN",
    "domain": "test",
    "failures": null,
    "id": 69123462,
    "integration": {
      "id": 100043,
      "is_live": true,
      "business_name": "Paystack"
    },
    "reason": "Enjoy",
    "reference": "1976435206",
    "source": "balance",
    "source_details": null,
    "status": "failed",
    "titan_code": null,
    "transfer_code": "TRF_chs98y5rykjb47w",
    "transferred_at": null,
    "recipient": {
      "active": true,
      "currency": "NGN",
      "description": null,
      "domain": "test",
      "email": "test@email.com",
      "id": 13584206,
      "integration": 100043,
      "metadata": null,
      "name": "Ted Lasso",
      "recipient_code": "RCP_cjcua8itre45gs",
      "type": "nuban",
      "is_deleted": false,
      "details": {
        "authorization_code": null,
        "account_number": "0123456789",
        "account_name": "Ted Lasso",
        "bank_code": "011",
        "bank_name": "First Bank of Nigeria"
      },
      "created_at": "2021-04-12T15:30:14.000Z",
      "updated_at": "2021-04-12T15:30:14.000Z"
    },
    "session": {
      "provider": "nip",
      "id": "74849400998877667"
    },
    "created_at": "2021-04-12T15:30:15.000Z",
    "updated_at": "2021-04-12T15:41:21.000Z"
  }
}`

const transfer_reversed = `{
  "event": "transfer.reversed",
  "data": {
    "amount": 10000,
    "currency": "NGN",
    "domain": "live",
    "failures": null,
    "id": 20615868,
    "integration": {
      "id": 100073,
      "is_live": true,
      "business_name": "Night's Watch Inc"
    },
    "reason": "test balance ledger elastic changes",
    "reference": "jvrjckwenm",
    "source": "balance",
    "source_details": null,
    "status": "reversed",
    "titan_code": null,
    "transfer_code": "TRF_js075pj9u07f34l",
    "transferred_at": "2020-03-24T07:14:00.000Z",
    "recipient": {
      "active": true,
      "currency": "NGN",
      "description": null,
      "domain": "live",
      "email": "jon@sn.ow",
      "id": 1476759,
      "integration": 100073,
      "metadata": null,
      "name": "JON SNOW",
      "recipient_code": "RCP_hmcj8ciho490bvi",
      "type": "nuban",
      "is_deleted": false,
      "details": {
        "authorization_code": null,
        "account_number": "0000000000",
        "account_name": null,
        "bank_code": "011",
        "bank_name": "First Bank of Nigeria"
      },
      "created_at": "2019-04-10T08:39:10.000Z",
      "updated_at": "2019-11-27T20:43:57.000Z"
    },
    "session": {
      "provider": "nip",
      "id": "110006200324071331002061586801"
    },
    "created_at": "2020-03-24T07:13:31.000Z",
    "updated_at": "2020-03-24T07:14:55.000Z"
  }
}`

const transfer_successful = `{
  "event": "transfer.success",
  "data": {
    "amount": 100000,
    "createdAt": "2025-08-04T10:32:40.000Z",
    "currency": "NGN",
    "domain": "test",
    "failures": null,
    "id": 860703114,
    "integration": {
      "id": 463433,
      "is_live": true,
      "business_name": "Paystack Demo",
      "logo_path": "https://public-files-paystack-prod.s3.eu-west-1.amazonaws.com/integration-logos/hpyxo8n1c7du6gxup7h6.png"
    },
    "reason": "Bonus for the week",
    "reference": "acv_9ee55786-2323-4760-98e2-6380c9cb3f68",
    "source": "balance",
    "source_details": null,
    "status": "success",
    "titan_code": null,
    "transfer_code": "TRF_v5tip3zx8nna9o78",
    "transferred_at": null,
    "updatedAt": "2025-08-04T10:32:40.000Z",
    "recipient": {
      "active": true,
      "createdAt": "2023-07-11T15:42:27.000Z",
      "currency": "NGN",
      "description": "",
      "domain": "test",
      "email": null,
      "id": 56824902,
      "integration": 463433,
      "metadata": null,
      "name": "Jekanmo Padie",
      "recipient_code": "RCP_gd9vgag7n5lr5ix",
      "type": "nuban",
      "updatedAt": "2023-07-11T15:42:27.000Z",
      "is_deleted": false,
      "details": {
        "authorization_code": null,
        "account_number": "9876543210",
        "account_name": null,
        "bank_code": "044",
        "bank_name": "Access Bank"
      }
    },
    "session": {
      "provider": null,
      "id": null
    },
    "fee_charged": 0,
    "gateway_response": null
  }
}`

export {charge_dispute_create, charge_dispute_remind, charge_dispute_resolve, customer_id_failed, customer_id_success, dva_assign_failed, dva_assign_success, invoice_created, invoice_failed, invoice_updated, payment_request_pending, payment_request_success, refund_failed, refund_pending, refund_processed, refund_processing, subscription_created, subscription_disabled, subscription_expiring_card, subscription_not_renew, transaction_successful, transfer_failed, transfer_reversed, transfer_successful}
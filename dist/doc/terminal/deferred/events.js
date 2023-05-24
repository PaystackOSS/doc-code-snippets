const invoice_failed = `{
  "event":"invoice.payment_failed",
  "data":{
    "domain":"test",
    "invoice_code":"INV_3kfmqw48ca7b48k",
    "amount":5000,
    "period_start":"2019-03-25T14:00:00.000Z",
    "period_end":"2019-03-24T23:59:59.000Z",
    "status":"pending",
    "paid":false,
    "paid_at":null,
    "description":null,
    "authorization":{
      "authorization_code":"AUTH_fmmpvpvphp",
      "bin":"506066",
      "last4":"6666",
      "exp_month":"03",
      "exp_year":"2033",
      "channel":"card",
      "card_type":"verve ",
      "bank":"TEST BANK",
      "country_code":"NG",
      "brand":"verve",
      "reusable":true,
      "signature":"SIG_bx0C6uIiqFHnoGOxTDWr",
      "account_name":"BoJack Horseman"
    },
    "subscription":{},
    "customer":{
      "id":6910995,
      "first_name":null,
      "last_name":null,
      "email":"xxx@gmail.com",
      "customer_code":"CUS_3p3ylxyf07605kx",
      "phone":null,
      "metadata":null,
      "risk_action":"default"
    },
    "transaction":{
      
    },
    "created_at":"2019-03-25T14:00:03.000Z"
  }
}`

const payment_request_pending = `{
  "event":"paymentrequest.pending",
  "data":{
    "id":1089700,
    "domain":"live",
    "amount":5000,
    "currency":"NGN",
    "due_date":null,
    "has_invoice":true,
    "invoice_number":33,
    "description":"Burger King Invoice",
    "pdf_url":null,
    "line_items":[
      {
        "name":"Pancake & Sausage",
        "amount":2000,
        "quantity":1
      },
      {
        "name":"Chicken Salad",
        "amount":3000,
        "quantity":1
      }
    ],
    "tax":[
      
    ],
    "request_code":"PRQ_79unvlqvixs3tu1",
    "status":"pending",
    "paid":false,
    "paid_at":null,
    "metadata":null,
    "notifications":[
      
    ],
    "offline_reference":"4634338037229",
    "customer":57611230,
    "created_at":"2021-10-20T09:53:10.000Z",
    "discount":null,
    "split_code":null
  }
}`

const payment_request_successful = `{
  "event":"paymentrequest.success",
  "data":{
    "id":1089700,
    "domain":"live",
    "amount":5000,
    "currency":"NGN",
    "due_date":null,
    "has_invoice":true,
    "invoice_number":4,
    "description":"Invoice for Damilola",
    "pdf_url":"https://api.paystack.co/files/invoices/463433/cititfeehb4bycv3o6j2mc0i7.pdf",
    "line_items":[
      {
        "name":"Pancake & Sausage",
        "amount":2000,
        "quantity":1
      },
      {
        "name":"Chicken Salad",
        "amount":3000,
        "quantity":1
      }
    ],
    "tax":[
      
    ],
    "request_code":"PRQ_79unvlqvixs3tu1",
    "status":"success",
    "paid":true,
    "paid_at":"2021-10-20T10:02:00.000Z",
    "metadata":null,
    "notifications":[
      {
        "sent_at":"2021-10-20T09:53:13.467Z",
        "channel":"email"
      }
    ],
    "offline_reference":"4634338037229",
    "customer":57611230,
    "created_at":"2021-10-20T09:53:10.000Z",
    "discount":null,
    "split_code":null
  }
}`

const transaction_successful = `{
  "event":"charge.success",
  "data":{
    "id":1259864309,
    "domain":"live",
    "status":"success",
    "reference":"pos_wtwyrj7n6x",
    "amount":"5000",
    "message":"Payment Made",
    "gateway_response":"Approved or completed successfully",
    "paid_at":"2021-11-04T16:32:33.000Z",
    "created_at":"2021-11-04T16:32:04.000Z",
    "channel":"pos",
    "currency":"NGN",
    "ip_address":"35.178.254.191, 172.70.162.115",
    "metadata":0,
    "log":null,
    "fees":null,
    "fees_split":null,
    "authorization":{
      "exp_month":null,
      "exp_year":null,
      "account_name":null,
      "receiver_bank_account_number":null,
      "receiver_bank":null
    },
    "customer":{
      "id":180059003,
      "first_name":null,
      "last_name":null,
      "email":"pos_e3iesb-eh@email.com",
      "customer_code":"CUS_xztjqwng1kzwdbt",
      "phone":null,
      "metadata":null,
      "risk_action":"default",
      "international_format_phone":null
    },
    "plan":{
      
    },
    "subaccount":{
      
    },
    "split":{
      
    },
    "order_id":null,
    "paidAt":"2021-11-04T16:32:33.000Z",
    "requested_amount":"200",
    "pos_transaction_data":null,
    "source":{
      "type":"offline",
      "source":"pos",
      "entry_point":"pos_initialize",
      "identifier":"2232WE17"
    }
  }
}`

export {invoice_failed, payment_request_pending, payment_request_successful, transaction_successful}
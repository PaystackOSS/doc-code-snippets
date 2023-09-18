const bank_transfer_rejected = `{
	"event": "bank.transfer.rejected",
	"data": {
		"bank_transfer": {
			"amount": "30000",
			"message": "incorrect amount sent",
			"message_type": "INCORRECT_AMOUNT",
			"transaction_id": "3103959930"
		},
		"customer": {
			"first_name": null,
			"last_name": null,
			"email": "test@amount.com",
			"phone": null,
			"metadata": null,
			"domain": "test",
			"customer_code": "CUS_1qjgujjddixs8gd",
			"risk_action": "default",
			"id": 138492368,
			"integration": 165949,
			"createdAt": "2023-09-12T12:55:55.000Z",
			"updatedAt": "2023-09-12T12:55:55.000Z"
		}
	}
}
`

const charge_successful = `{
	"event": "charge.success",
	"data": {
		"id": 3104021987,
		"domain": "test",
		"status": "success",
		"reference": "zuz8ggd1ro",
		"amount": 25000,
		"message": null,
		"gateway_response": "Approved",
		"paid_at": "2023-09-12T13:29:09.000Z",
		"created_at": "2023-09-12T13:27:50.000Z",
		"channel": "bank_transfer",
		"currency": "NGN",
		"ip_address": "172.91.42.100",
		"metadata": "",
		"fees_breakdown": null,
		"log": null,
		"fees": 375,
		"fees_split": null,
		"authorization": {
			"authorization_code": "AUTH_q5nfynycgm",
			"bin": "008XXX",
			"last4": "X553",
			"exp_month": "09",
			"exp_year": "2023",
			"channel": "bank_transfer",
			"card_type": "transfer",
			"bank": null,
			"country_code": "NG",
			"brand": "Managed Account",
			"reusable": false,
			"signature": null,
			"account_name": null,
			"sender_country": "NG",
			"sender_bank": null,
			"sender_bank_account_number": "XXXXXXX553",
			"sender_name": "Jadesola Oluwashina",
			"narration": "Channel Tests"
		},
		"customer": {
			"id": 138496675,
			"first_name": null,
			"last_name": null,
			"email": "another@one.com",
			"customer_code": "CUS_1eq06yu8efl8u63",
			"phone": null,
			"metadata": null,
			"risk_action": "default",
			"international_format_phone": null
		},
		"plan": {},
		"subaccount": {},
		"split": {},
		"order_id": null,
		"paidAt": "2023-09-12T13:29:09.000Z",
		"requested_amount": 25000,
		"pos_transaction_data": null,
		"source": {
			"type": "api",
			"source": "merchant_api",
			"entry_point": "charge",
			"identifier": null
		}
	}
}
`

export {bank_transfer_rejected, charge_successful}
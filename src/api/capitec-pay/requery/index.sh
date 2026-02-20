#!/bin/sh
url="https://api.paystack.co/capitec-pay/requery/{ref}"
authorization="Authorization: Bearer pk_domain_xxxxx"

curl "$url" -H "$authorization" -X GET
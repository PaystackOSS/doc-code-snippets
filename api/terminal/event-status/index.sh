#!/bin/sh
url="https://api.paystack.co/terminal/{terminal_id}/event/{event_id}"
authorization="Authorization: Bearer YOUR_SECRET_KEY"

curl "$url" -H "$authorization" -X GET
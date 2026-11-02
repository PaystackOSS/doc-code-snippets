const crypto = require('crypto');
const express = require('express');

const TOLERANCE_SECONDS = 300;

// Returns the key id (kid) of the signature that matched, or null.
function verifyPaystackSignature(rawBody, header, secrets, now = Math.floor(Date.now() / 1000)) {
  if (!Buffer.isBuffer(rawBody) || typeof header !== 'string') return null;

  let t = null;
  const entries = [];
  for (const part of header.split(',')) {
    const i = part.indexOf('=');
    if (i === -1) continue;
    const key = part.slice(0, i).trim();
    const value = part.slice(i + 1).trim();
    if (key === 't') {
      if (t !== null || !/^[0-9]+$/.test(value)) return null;
      t = Number(value);
    } else if (key === 'v1') {
      const j = value.indexOf(':');
      if (j !== -1) entries.push({ kid: value.slice(0, j), hex: value.slice(j + 1) });
    }
  }
  if (t === null || entries.length === 0) return null;
  if (Math.abs(now - t) > TOLERANCE_SECONDS) return null;

  for (const secret of secrets) {
    const expected = crypto.createHmac('sha512', secret).update(t + '.').update(rawBody).digest();
    for (const { kid, hex } of entries) {
      if (!/^[0-9a-f]{128}$/.test(hex)) continue;
      if (crypto.timingSafeEqual(expected, Buffer.from(hex, 'hex'))) return kid;
    }
  }
  return null;
}

const app = express();

// express.raw keeps req.body as the exact bytes Paystack sent. Register this route before any
// app.use(express.json()): a JSON parser that runs first consumes the body and every check fails.
app.post('/my/webhook/url', express.raw({ type: 'application/json' }), (req, res) => {
  const secret = process.env.PAYSTACK_WEBHOOK_SECRET; // whsec_...
  if (!secret) return res.sendStatus(500);
  const kid = verifyPaystackSignature(req.body, req.get('paystack-signature'), [secret]);
  if (!kid) return res.sendStatus(401);

  res.sendStatus(200);
  const event = JSON.parse(req.body.toString('utf8'));
  // Do something with event
});
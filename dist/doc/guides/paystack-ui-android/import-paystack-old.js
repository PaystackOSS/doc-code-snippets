const kt = `PaystackSdk.initialize(applicationContext)
PaystackSdk.setPublicKey(BuildConfig.PSTK_PUBLIC_KEY)

`

const java = `PaystackSdk.initialize(getApplicationContext());
PaystackSdk.setPublicKey(BuildConfig.PSTK_PUBLIC_KEY);
`

export {kt, java}
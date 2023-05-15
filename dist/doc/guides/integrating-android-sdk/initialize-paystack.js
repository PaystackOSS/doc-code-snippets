const kt = `private fun initializePaystack() {
    PaystackSdk.initialize(applicationContext)
    PaystackSdk.setPublicKey(BuildConfig.PSTK_PUBLIC_KEY)
}
`

const java = `private void initializePaystack() {
    PaystackSdk.initialize(getApplicationContext());
    PaystackSdk.setPublicKey(BuildConfig.PSTK_PUBLIC_KEY);
}
`

export {kt, java}
private fun initializePaystack() {
    PaystackSdk.initialize(applicationContext)
    PaystackSdk.setPublicKey(BuildConfig.PSTK_PUBLIC_KEY)
}

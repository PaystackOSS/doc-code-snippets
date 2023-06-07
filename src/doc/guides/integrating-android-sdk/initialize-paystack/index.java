private void initializePaystack() {
    PaystackSdk.initialize(getApplicationContext());
    PaystackSdk.setPublicKey(BuildConfig.PSTK_PUBLIC_KEY);
}

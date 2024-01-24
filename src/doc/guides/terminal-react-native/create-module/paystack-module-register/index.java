PaystackModule(ReactApplicationContext context) {
    super(context);

    context.addActivityEventListener(mActivityEventListener);
}
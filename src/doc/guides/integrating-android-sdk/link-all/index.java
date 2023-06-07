@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_checkout);

		// add these lines
    initializePaystack();
    initializeFormVariables();
}

const java = `@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_checkout);

		// add these lines
    initializePaystack();
    initializeFormVariables();
}`

const kotlin = `override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_checkout)

  // add these lines
  initializePaystack()
  initializeFormVariables()
}`

export { java, kotlin }

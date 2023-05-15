const kt = `override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_checkout)

  // add these lines
  initializePaystack()
  initializeFormVariables()
}
`

const java = `@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_checkout);

		// add these lines
    initializePaystack();
    initializeFormVariables();
}
`

export {kt, java}
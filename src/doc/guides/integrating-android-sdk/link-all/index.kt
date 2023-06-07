override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_checkout)

  // add these lines
  initializePaystack()
  initializeFormVariables()
}

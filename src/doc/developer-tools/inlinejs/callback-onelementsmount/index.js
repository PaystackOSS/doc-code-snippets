onElementsMount: (elements) =>{ // { applePay: true } or null
  if (elements) {
    console.log("Successfully mounted elements: ", JSON.stringify(elements));
  } else {
    console.log('Could not load elements');
  }
}
const js = `callback: function(response){
  $.ajax({
    url: 'http://www.yoururl.com/verify_transaction?reference='+ response.reference,
    method: 'get',
    success: function (response) {
      // the transaction status is in response.data.status
    }
  });
}`

export {js}
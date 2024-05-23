document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the payment details from the form
    var paymentDetails = document.getElementById('payment-details').value;
  
    // Simulate a successful payment if the payment details are not empty
    var paymentResult = {
      success: paymentDetails !== '',
      message: paymentDetails ? 'Payment successful!' : 'Please enter payment details.'
    };
  
    if (paymentResult.success) {
      // Open the payment successful message in a new window
      var paymentResultWindow = window.open('', '_blank');
      paymentResultWindow.document.write('<html><body class="payment-successful"><h1 class="text-center mb-5" style="font-size: 3rem; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);"> Congrats! RESERVATION Successful</h1><img src="tick.gif" alt="Your Payment Successful"></body></html>');
      paymentResultWindow.document.write("<h1>THANKYOU FOR BOOKING<h1>")
    }
  });
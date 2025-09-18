document.getElementById('donation-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission

  // Get donor info
  const fullName = document.getElementById('full-name').value.trim().split(' ');
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const amount = document.getElementById('amount').value * 100; // convert GHS to kobo

  // Split full name into first and last
  const firstName = fullName[0];
  const lastName = fullName.slice(1).join(' ');

  // Construct the Paystack URL
  const paymentUrl = `https://paystack.com/pay/your-payment-page-id?email=${email}&first_name=${firstName}&last_name=${lastName}&amount=${amount}&read_only=email,first_name,last_name,amount`;

  // Redirect the user to Paystack
  window.location.href = paymentUrl;
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("userLoginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Dummy validation (replace with real backend validation)
      if (email && password) {
        // Optionally: add your own API call here for real login
        alert("Login successful!");
        window.location.href = "booking.html"; // Redirect to booking page
      } else {
        alert("Please enter valid credentials.");
      }
    });
  }
});

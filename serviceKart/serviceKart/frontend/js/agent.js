// agent.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Agent script loaded");

  const loginForm = document.getElementById("agentLoginForm");
  const registerForm = document.getElementById("agentRegisterForm");

  // Login form submit handler
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // Simple dummy validation: email must include 'agent', password min length 4
      if (email.includes("gmail") && password.length > 3) {
        alert("Logged in successfully!");
        window.location.href = "agent-dashboard.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  // Registration form submit handler
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const skill = document.getElementById("skill").value.trim();

      if (!name || !email || !password || !skill) {
        alert("Please fill in all registration fields.");
        return;
      }

      console.log("Agent Registration:", { name, email, password, skill });
      alert("Registered successfully!");
      registerForm.reset();
    });
  }
});

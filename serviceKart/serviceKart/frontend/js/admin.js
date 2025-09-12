document.addEventListener("DOMContentLoaded", () => {
  // Admin Login
  const loginForm = document.getElementById("adminLoginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("adminEmail").value;
      const password = document.getElementById("adminPassword").value;
      console.log("Admin Login:", { email, password });
      alert("Admin logged in successfully!");
    });
  }

  // Dummy data (Replace with real fetch calls later)
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];
  const agents = [
    { id: 1, name: "Charlie", skill: "Electrician", email: "charlie@agent.com" },
    { id: 2, name: "Daisy", skill: "Cleaner", email: "daisy@agent.com" },
  ];
  const bookings = [
    { id: 101, user: "Alice", service: "Plumbing", status: "Pending" },
    { id: 102, user: "Bob", service: "Cleaning", status: "Completed" },
  ];

  const renderTable = (data, tableId, type) => {
    const table = document.getElementById(tableId);
    if (!table) return;

    table.innerHTML = "";
    data.forEach((item) => {
      let row = "<tr>";
      if (type === "user") {
        row += `<td>${item.id}</td><td>${item.name}</td><td>${item.email}</td>`;
      } else if (type === "agent") {
        row += `<td>${item.id}</td><td>${item.name}</td><td>${item.skill}</td><td>${item.email}</td>`;
      } else if (type === "booking") {
        row += `<td>${item.id}</td><td>${item.user}</td><td>${item.service}</td><td>${item.status}</td>`;
      }
      row += `<td><button class="btn-sm">Delete</button></td></tr>`;
      table.innerHTML += row;
    });
  };

  renderTable(users, "userTable", "user");
  renderTable(agents, "agentTable", "agent");
  renderTable(bookings, "bookingTable", "booking");
});

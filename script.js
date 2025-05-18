
let total = 0;
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

function addExpense() {
  const name = document.getElementById("expenseName").value.trim();
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const category = document.getElementById("expenseCategory").value;

  if (!name || isNaN(amount)) return;

  total += amount;
  totalDisplay.textContent = total.toFixed(2);

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <strong>${name}</strong><br/>
    <em>Category:</em> ${category}<br/>
    <em>Cost:</em> $${amount.toFixed(2)}
  `;
  expenseList.appendChild(card);

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    displayDate();
});

let totalSpend = 0;
let totalExpenses = 0;

function displayDate() {
    const date = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById("date-display").innerText = date.toLocaleDateString("en-US", options);
}

function addExpense() {
    let name = document.getElementById("expense-name").value;
    let amount = document.getElementById("expense-amount").value;
    let category = document.getElementById("expense-category").value;

    if (!name || !amount) {
        alert("Please enter expense details!");
        return;
    }

    let expenseList = document.getElementById("expense-list");
    let li = document.createElement("li");
    li.innerHTML = `${category} ${name}: ₹${amount} <button onclick="removeExpense(this, ${amount})">❌</button>`;
    expenseList.appendChild(li);

    totalSpend += parseFloat(amount);
    totalExpenses++;
    
    document.getElementById("total-spend").innerText = totalSpend;
    document.getElementById("total-expenses").innerText = totalExpenses;
}

function removeExpense(button, amount) {
    totalSpend -= amount;
    totalExpenses--;

    document.getElementById("total-spend").innerText = totalSpend;
    document.getElementById("total-expenses").innerText = totalExpenses;

    button.parentNode.remove();
}






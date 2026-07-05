// ------------------------------
// DOM Elements
// ------------------------------
const expenseForm = document.getElementById("expenseForm");
const expenseContainer = document.getElementById("expenseContainer");
const totalExpense = document.getElementById("totalExpense");
const totalRecords = document.getElementById("totalRecords");
const toast = document.getElementById("toast");
const addBtn = document.getElementById("addBtn");

// ------------------------------
// Toast Notification
// ------------------------------
function showToast(message) {

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

// ------------------------------
// Load Expenses on Page Load
// ------------------------------
window.onload = function () {
    loadExpenses();
};

// ------------------------------
// Load Expenses
// ------------------------------
async function loadExpenses() {

    try {

        const response = await fetch("/expenses");
        const expenses = await response.json();

        expenseContainer.innerHTML = "";

        // Empty State
        if (expenses.length === 0) {

            expenseContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-wallet"></i>
                    <h3>No Expenses Yet</h3>
                    <p>Start by adding your first expense.</p>
                </div>
            `;

            totalExpense.textContent = "₹0";
            totalRecords.textContent = "0";

            return;
        }

        let total = 0;

        expenses.forEach(expense => {

            total += Number(expense.amount);

            expenseContainer.innerHTML += `
                <div class="expense-item">

                    <div class="expense-info">

                        <h3>${expense.name}</h3>

                        <p>Category : ${expense.category}</p>

                        <small>${expense.date}</small>

                    </div>

                    <div class="expense-action">

                        <span>₹${expense.amount}</span>

                        <button onclick="deleteExpense(${expense.id})">

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                </div>
            `;

        });

        totalExpense.textContent = `₹${total}`;
        totalRecords.textContent = expenses.length;

    }

    catch (error) {

        console.log("Load Error:", error);

    }

}

// ------------------------------
// Add Expense
// ------------------------------
expenseForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const expense = {

        name: document.getElementById("expenseName").value.trim(),
        category: document.getElementById("category").value,
        amount: Number(document.getElementById("amount").value),
        date: document.getElementById("date").value

    };

    // Validation

    if (expense.name === "") {

        alert("Please enter Expense Name.");
        return;

    }

    if (expense.amount <= 0 || isNaN(expense.amount)) {

        alert("Please enter a valid Amount.");
        return;

    }

    if (expense.date === "") {

        alert("Please select a Date.");
        return;

    }

    try {

        // Loading Button
        addBtn.disabled = true;

        addBtn.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Adding...
        `;

        // Uncomment this only for testing
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch("/expenses", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(expense)

        });

        if (response.ok) {

            expenseForm.reset();

            await loadExpenses();

            showToast("✅ Expense Added Successfully");

        }

    }

    catch (error) {

        console.log("Add Error:", error);

    }

    finally {

        // Restore Button
        addBtn.disabled = false;

        addBtn.innerHTML = `
            <i class="fa-solid fa-plus"></i>
            Add Expense
        `;

    }

});

// ------------------------------
// Delete Expense
// ------------------------------
async function deleteExpense(id) {

    try {

        const response = await fetch(`/expenses/${id}`, {

            method: "DELETE"

        });

        if (response.ok) {

            await loadExpenses();

            showToast("🗑️ Expense Deleted Successfully");

        }

    }

    catch (error) {

        console.log("Delete Error:", error);

    }

}
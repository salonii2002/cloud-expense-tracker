const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));

// In-memory expense storage
let expenses = [];
 

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Health Check API
app.get("/health", (req, res) => {

    console.log("Health Check Requested");

    res.json({
        status: "Running",
        application: "Cloud Expense Tracker",
        deployment: "AWS ECS Fargate"
    });

});

// Get All Expenses
app.get("/expenses", (req, res) => {

    console.log("Fetching Expenses");

    res.json(expenses);

});

// Add Expense
app.post("/expenses", (req, res) => {

    const { name, category, amount, date } = req.body;

    if (!name || !category || !amount || !date) {

        return res.status(400).json({
            message: "All fields are required."
        });

    }

    const newExpense = {

        id: Date.now(),
        name,
        category,
        amount: Number(amount),
        date

    };

    expenses.push(newExpense);

    console.log("Expense Added:", newExpense);

    res.status(201).json({

        message: "Expense Added Successfully",

        expense: newExpense

    });

});

// Delete Expense
app.delete("/expenses/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = expenses.findIndex(expense => expense.id === id);

    if (index === -1) {

        return res.status(404).json({

            message: "Expense Not Found"

        });

    }

    const deletedExpense = expenses.splice(index, 1);

    console.log("Expense Deleted:", deletedExpense[0]);

    res.json({

        message: "Expense Deleted Successfully"

    });

});

// 404 Handler
app.use((req, res) => {

    res.status(404).json({

        message: "Route Not Found"

    });

});

// Start Server
app.listen(PORT, "0.0.0.0", () => {

    console.log("-------------------------------------");
    console.log("Cloud Expense Tracker Started");
    console.log(`Server Running on Port ${PORT}`);
    console.log("-------------------------------------");

});
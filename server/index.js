const express = require('express');
const app = express();
const dbConnect = require('./db/mongodb.js');
const loginModel = require('./db/schema.js');
const Transaction = require('./db/transactions.js');
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend's domain
}));
dbConnect();

// Sigm-up API
app.post('/register', async (req, res) => {
    const user = new loginModel(req.body);
    const result = await user.save();
    res.send(result);
})

app.post('/add-transaction', async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        const result = await newTransaction.save();
        res.send(result);
    } catch (error) {
        console.error("Error adding order:", error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/dashboard-stats', async (req, res) => {
    try {
        // Perform aggregation queries to calculate dashboard statistics
        const totalRevenue = await Transaction.aggregate([
            { $match: { type: { $in: ["sale", "income"] } } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const salesReturn = await Transaction.aggregate([
            { $match: { type: "return" } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const totalPurchase = await Transaction.aggregate([
            { $match: { type: "purchase" } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const totalIncome = await Transaction.aggregate([
            { $match: { type: "income" } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        res.status(200).json({
            totalRevenue: totalRevenue[0].total,
            salesReturn: salesReturn[0].total,
            totalPurchase: totalPurchase[0].total,
            totalIncome: totalIncome[0].total,
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.listen(5000, () => {
    console.log("Server listening on port " + 5000);
})
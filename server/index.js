const express = require('express');
const app = express();
const dbConnect = require('./db/mongodb.js');
const userModel = require('./db/schema.js');
const Transaction = require('./db/transactions.js');
const cors = require('cors');


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend's domain
}));
dbConnect();

// Sigm-up API
app.post('/register', async (req, res) => {
    const user = new userModel(req.body);
    const result = await user.save();
    res.send(result);
})

// Login API
app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        const user = await userModel.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.send("No such user");
        }
    }
    else {
        res.send("No such user");
    }
});


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

        const topSellingProducts = await Transaction.aggregate([
            { $match: { type: "return" } },
            { $group: { _id: "$products", quantitySold: { $sum: "$amount" } } },
            { $sort: { quantitySold: -1 } },
            { $limit: 10 } // You can adjust this number to show more or fewer products
        ]);
        
        res.status(200).json({
            totalRevenue: totalRevenue[0].total,
            salesReturn: salesReturn[0].total,
            totalPurchase: totalPurchase[0].total,
            totalIncome: totalIncome[0].total,
            topSellingProducts: topSellingProducts,
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/sales-stats', async (req, res) => {
    try {
        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Perform aggregation query to calculate dashboard statistics for today's sales
        const totalRevenue = await Transaction.aggregate([
            { $match: { type: { $in: ["sale", "income"] }, date: { $gte: today } } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const salesReturn = await Transaction.aggregate([
            { $match: { type: "return", date: { $gte: today } } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        // Count the number of orders placed today with type "return"
        const orderCount = await Transaction.countDocuments({ type: "return", date: { $gte: today } });

        const customerCountPipeline = [
            {
                $match: { type: "return", date: { $gte: today } }
            },
            {
                $group: { _id: "$customer", count: { $sum: 1 } }
            }
        ];

        const customerCount = await Transaction.aggregate(customerCountPipeline);

        const todayTopSellingProducts = await Transaction.aggregate([
            { $match: { type: "return", date: { $gte: today } } },
            { $unwind: "$products" }, // Assuming "products" is an array field in your schema
            {
                $group: {
                    _id: "$products",
                    quantitySold: { $sum: "$amount" },
                },
            },
            { $sort: { quantitySold: -1 } },
            { $limit: 10 } // You can adjust this number to show more or fewer products
        ]);


        res.status(200).json({
            totalRevenue: totalRevenue[0] ? totalRevenue[0].total : 0,
            salesReturn: salesReturn[0] ? salesReturn[0].total : 0,
            orderCount: orderCount,
            customerCount: customerCount.length > 0 ? customerCount[0].count : 0,
            todayTopSellingProducts: todayTopSellingProducts,
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});



// DELETE route to delete an order by orderId
app.delete('/delete-order/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;

        await Transaction.deleteOne({ orderId: orderId });

        res.status(200).json({ message: 'Order deleted successfully' });
        if (orderId !== -1) {
            // Remove the order from the orders array
            orders.splice(orderId, 1);

            res.status(200).json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ message: 'Error deleting order' });
    }
});


app.listen(5000, () => {
    console.log("Server listening on port " + 5000);
})
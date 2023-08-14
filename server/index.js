const express = require('express');
const app = express();
const dbConnect = require('./db/mongodb.js');
const loginModel = require('./db/schema.js');
const cors = require('cors');


app.use(express.json());
app.use(cors());

dbConnect();

// Sigm-up API
app.post('/register', async (req, res) => {
    const user = new loginModel(req.body);
    const result = await user.save();
    res.send(result);
})

app.listen(5000, () => {
    console.log("Server listening on port " + 5000);
})
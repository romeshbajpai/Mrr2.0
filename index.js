const express = require('express');
const connectDB = require('./src/configs/db');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT || 8081;
app.listen(port, async () => {
    try {
        await connectDB();
        console.log(`application is listening at port http://localhost:${port}`);
    } catch (error) {
        console.log('error', error);
        throw error;
    }
});
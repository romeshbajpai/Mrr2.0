const express = require('express');
const connectDB = require('./src/configs/db');
const cors = require('cors');
const userRoute = require('./src/routes/user.route')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use('/api/v1/medi_reporting/user', userRoute);
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
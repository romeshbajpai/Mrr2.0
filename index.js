const express = require('express');
const connectDB = require('./src/configs/db');
const cors = require('cors');
const userRoute = require('./src/routes/user.route')
const companyRoute = require('./src/routes/company.route')
const countryRoute = require('./src/routes/country.route')
const districtRoute = require('./src/routes/district.route')
const divisionRoute = require('./src/routes/division.route')
const stateRoute = require('./src/routes/state.route')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use('/api/v1/medi_reporting/user', userRoute);
app.use('/api/v1/medi_reporting/company', companyRoute);
app.use('/api/v1/medi_reporting/country', countryRoute);
app.use('/api/v1/medi_reporting/district', districtRoute);
app.use('/api/v1/medi_reporting/division', divisionRoute);
app.use('/api/v1/medi_reporting/state', stateRoute);
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
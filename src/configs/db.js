const mongoose = require("mongoose");

const connectDB = async () => {
    try { 
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected at host ${connect.connection.host}`);
    } catch (error) {
        console.log(`error ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Do not exit process, let server handle it or retry
        // process.exit(1); 
    }
};

module.exports = connectDB;

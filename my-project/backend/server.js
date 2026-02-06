// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.error(err.name, err.message);
    console.error(err.stack);
    process.exit(1);
});

const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS Configuration - Place BEFORE other middleware
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/feedback', require('./routes/feedback'));

// Basic health check route
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB().then(() => {
    const server = app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err, promise) => {
        console.log(`Error: ${err.message}`);
        // server.close(() => process.exit(1)); 
    });
});

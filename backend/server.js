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

// CORS Configuration - Restrict to frontend URL
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/feedback', require('./routes/feedback'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/admin', require('./routes/admin'));

// Basic health check route
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5001;

// Connect Database
connectDB();

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📍 API Base URL: http://localhost:${PORT}/api\n`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.error(`❌ Unhandled Promise Rejection: ${err.message}`);
});

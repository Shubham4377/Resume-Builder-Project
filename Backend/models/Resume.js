// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Define routes
const resumeRouter = require('./routes/resume'); // Adjust route path as needed
app.use('/api/resume', resumeRouter); // Use the router for '/api/resume' endpoint

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

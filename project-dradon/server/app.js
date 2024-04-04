// Import necessary modules
const express = require('express');
const path = require('path');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000; // Use the port from the environment variables or default to 3000

// Middleware to serve static files from 'client' directory
// Adjust the path according to your project structure
app.use(express.static(path.join(__dirname, '../client')));

// Middleware to parse JSON bodies
app.use(express.json());

// Example API route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Catch-all route to serve main 'index.html' for any other request
// This is particularly useful for single-page applications
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

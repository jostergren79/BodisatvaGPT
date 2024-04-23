// Import express
const express = require('express');

// Create an express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Make the application listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 🚀');
});

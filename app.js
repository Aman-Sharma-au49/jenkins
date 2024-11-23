const express = require('express'); // Import Express
const app = express(); // Create an Express application
const port = 3000; // Port number

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Node.js page!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


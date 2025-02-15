// Importing required modules
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Simulated in-memory database (an array of contacts)
let contacts = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' }
];

// GET: Fetch all contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);  // Sends the list of contacts as a JSON response
});

// POST: Add a new contact
app.post('/contacts', (req, res) => {
  const { name, email, phone } = req.body;

  // Validate that all fields are provided
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a new contact object and add it to the in-memory array
  const newContact = {
    id: contacts.length + 1,  // Incremental ID (you can implement better ID generation in production)
    name,
    email,
    phone
  };

  contacts.push(newContact);  // Add new contact to the array

  console.log(contacts);  // Log the updated contacts array to check in the console

  // Send the new contact back in the response with a 201 status (created)
  res.status(201).json(newContact);
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
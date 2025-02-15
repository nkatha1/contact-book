Contact Book
Description
The Contact Book is a simple application that allows users to add and store contacts. The app provides a basic interface where users can input a contact's name, email, and phone number. Currently, the app stores the contacts on the server but does not display them on the frontend. The data is stored in memory (not persistent), so when the server is restarted, the data is lost.

This project is built with Node.js and Express for the backend and HTML/CSS/JavaScript for the frontend.

Features
Add Contact: Users can submit their contact details (name, email, phone number).
Store Contacts: Contacts are stored on the server in memory using a simple in-memory array.
Backend API: The backend exposes RESTful API endpoints to add contacts.
Current Limitations
No Contact Display: Although the app can store contacts on the backend, it does not currently display them on the frontend.
No Persistent Storage: The contacts are stored temporarily in the backend's memory. If the server is restarted, the contacts will be lost.
Technologies Used
Node.js: JavaScript runtime to handle backend logic.
Express: Web framework to handle routing and API requests.
HTML/CSS/JavaScript: Used for the frontend interface.
REST API: To handle adding and storing contacts.
Setup and Installation
Prerequisites
Ensure you have Node.js installed. If not, you can download it here.

Steps to Run the Project Locally
Clone the repository:

bash
Copy
git clone https://github.com/your-username/contact-book.git
cd contact-book
Install dependencies:

bash
Copy
npm install
Start the server:

bash
Copy
node server.js
The backend server will run on http://localhost:3000.

Open index.html in your browser to interact with the Contact Book interface.

API Endpoints
POST /contacts
Description: Adds a new contact to the list.
Request Body:
json
Copy
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
Response:
Success (201): Returns the newly added contact.
json
Copy
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
Error (400): If any of the fields are missing.
GET /contacts
Description: Fetches all stored contacts. Currently, this endpoint is implemented but not used on the frontend to display the contacts.
Response:
json
Copy
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "123-456-7890"
  }
]
DELETE /contacts/:id
Description: Deletes a contact by its unique ID.
Response: Returns a 200 OK message on successful deletion.
Frontend Usage
Adding a Contact
To add a contact, simply enter the name, email, and phone number into the input fields and click Add Contact. This will send a POST request to the backend to store the contact.

Currently, after adding a contact, the page will not display the updated contact list since the GET request to fetch contacts is not yet implemented on the frontend.

Example Workflow:
Open the Contact Book UI in your browser (index.html).
Add a contact by filling out the form and clicking the "Add Contact" button.
The contact will be added to the server (but not displayed in the UI yet).
Limitations and Future Improvements
Displaying Contacts: The app does not display the contacts on the frontend after they are added. Implementing a GET request to fetch and display contacts would make this a fully functional contact book.
Persistent Storage: Contacts are currently stored in-memory. A database (e.g., MongoDB, PostgreSQL) should be used to persist contacts across server restarts.
Frontend UI Improvements: The frontend can be improved by adding features such as editing or deleting contacts directly from the UI.
Input Validation: There is minimal validation for the input fields. More robust validation should be added to ensure the correct format for emails, phone numbers, etc.
Contributing
Contributions are welcome! If you’d like to improve the app (such as implementing the display functionality), feel free to fork the repository, create a new branch, and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

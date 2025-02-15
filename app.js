const apiUrl = 'http://localhost:5000/contacts';  // Backend API URL

// Function to render the contact list
const renderContactList = async () => {
  const response = await fetch(apiUrl);  // Fetch updated contacts from backend
  const contacts = await response.json();
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';  // Clear existing list

  // Render all contacts in the list
  contacts.forEach(contact => {
    const contactItem = document.createElement('li');
    contactItem.textContent = `${contact.name} - ${contact.email} - ${contact.phone}`;
    contactList.appendChild(contactItem);
  });
};

// Function to add a new contact
const addContact = async (name, email, phone) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, phone }),
  });

  if (response.ok) {
    const newContact = await response.json();
    renderContactList();  // Re-render the contact list to show the new contact
  } else {
    console.error('Failed to add contact');
  }
};

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
    await addContact(name, email, phone);  // Add the new contact
  } else {
    alert('Please fill all fields');
  }
});

// Initial render of the contact list
renderContactList();
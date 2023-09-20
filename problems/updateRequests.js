import ky from "ky";

// Add a new employee to the database
const newEmployee = {
  id: 53,
  first_name: "Aidan",
  last_name: "Sunbury",
  email: "aidansunbury@berkeley.edu",
};

// Once the employee has been added, we can use put to add the exact same employee again and it will not error

// Update an existing employee

// If we only want to update a specific field, we can use patch

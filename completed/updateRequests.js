import ky from "ky";

// Add a new employee to the database
const newEmployee = {
  id: 53,
  first_name: "Aidan",
  last_name: "Sunbury",
  email: "aidansunbury@berkeley.edu",
};

const added = await ky
  .post("http://localhost:3000/employees", {
    json: newEmployee,
  })
  .json();

console.log(added);

// Once the employee has been added, we can use put to add the exact same employee again and it will not error

// Update an existing employee

const updated = await ky
  .put("http://localhost:3000/employees/53", {
    json: newEmployee,
  })
  .json();

console.log(updated);

// If we only want to update a specific field, we can use patch

const updated2 = await ky
  .patch("http://localhost:3000/employees/53", {
    json: { last_name: "Kirchner" },
  })
  .json();
console.log(updated2);

import { faker } from "@faker-js/faker";
import fs from "fs";

function generateData() {
  var employees = [];
  for (var id = 0; id < 50; id++) {
    var firstName = faker.person.firstName();
    var lastName = faker.person.lastName();
    var email = faker.internet.email();
    employees.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  }
  return { employees: employees };
}

function writeJsonToFile(jsonObject, filePath) {
  // Convert the JSON object to a string with 2-space indentation (for formatting)
  const jsonString = JSON.stringify(jsonObject, null, 2);

  // Write the JSON string to the specified file path
  fs.writeFile(filePath, jsonString, "utf8", (err) => {
    if (err) {
      console.error(`Error writing to ${filePath}: ${err.message}`);
    } else {
      console.log(`JSON object has been successfully written to ${filePath}`);
    }
  });
}

const dataToWrite = generateData(); // Replace with the desired JSON object

const filePath = "./databases/custom_db.json"; // Replace with the desired file path

// Call the function to write the JSON object to the file
writeJsonToFile(dataToWrite, filePath);

// Used to replace db.json with the contents of a different JSON file

import fs from "fs";

// To load a different JSON file, change the value of sourceFilePath to any of the files within the databases folder
const sourceFilePath = "./databases/full_db.json";
const targetFilePath = "db.json";

// Read the contents of the source JSON file
fs.readFile(sourceFilePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${sourceFilePath}: ${err.message}`);
    return;
  }

  try {
    // Parse the JSON data from the source file
    const jsonData = JSON.parse(data);

    // Convert the JSON data back to a string with 2-space indentation (for formatting)
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Write the JSON data to the target JSON file
    fs.writeFile(targetFilePath, jsonString, "utf8", (err) => {
      if (err) {
        console.error(`Error writing to ${targetFilePath}: ${err.message}`);
      } else {
        console.log(
          `Contents of ${sourceFilePath} have been successfully copied to ${targetFilePath}`
        );
      }
    });
  } catch (parseError) {
    console.error(
      `Error parsing JSON data from ${sourceFilePath}: ${parseError.message}`
    );
  }
});

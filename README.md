# Lecture-4-Starter

This lecture uses the json-server npm library to host a simple server that supports read and write actions from a json file.

To run the server with the current set of data run

> npx json-server --watch db.json

There are also two useful scripts which can be useful for generating and replacing databases

createDB.js generates a database using faker and saves it in custom_db.json
loadData.js takes any of the json files under the databases directory, and replaces db.json with that data. This way, db.json can easily be reset.

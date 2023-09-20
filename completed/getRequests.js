import ky from "ky";

// Hello Get Requests

const user3 = await ky.get("http://localhost:3000/employees/40").json();

console.log(user3);

// Query Parameters

const chelsea = await ky
  .get("http://localhost:3000/employees?first_name=Saul")
  .json();

console.log(chelsea);

// Limiting Responses and Sorting

// Get the first ten employees by slicing
const tenEmployees = await ky
  .get("http://localhost:3000/employees?_start=0&_end=10")
  .json();

console.log(tenEmployees);

// Get locations with a longitude greater than or equal to 45
const northLocations = await ky
  .get("http://localhost:3000/locations?position.longitude_gte=45")
  .json();

console.log(northLocations);

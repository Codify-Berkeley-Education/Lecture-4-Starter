import ky from "ky";

// Hello Get Requests
const baseUrl = "http://localhost:3000";

async function getUser(id) {
  return await ky.get(baseUrl + `/employees/${id}`).json();
}

console.log(await getUser(53));

// Query Parameters

// Limiting Responses and Sorting

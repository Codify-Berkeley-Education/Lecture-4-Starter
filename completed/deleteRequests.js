import ky from "ky";

// Hello Delete Requests

const deleted = await ky.delete("http://localhost:3000/employees/8").json();

console.log(deleted);

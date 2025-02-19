const fs = require("fs");

// Blocking
console.log("1");
const result = fs.readFileSync("./04NodeJS-Arch/contacts.txt", "utf-8");
console.log(result);
console.log("2");

console.log("");

// Non-Blocking
console.log("3");
const resultNonBlock = fs.readFile("./04NodeJS-Arch/contacts.txt", "utf-8", (err, res) => {
    console.log(res);
});

console.log("4");
const fs = require("fs");

// // Create
// // Sync
// console.log("1");
// fs.writeFileSync("./test.txt", "This is file created using fs");
// console.log("2");

// //Async
// console.log("3")
// fs.writeFile("./testAsync.txt", "File created using Async Function", (err) => {
//     console.log(err);
// });
// console.log("4");

// // Read
// const res = fs.readFileSync("./03FileHandling/files/contacts.txt", "utf-8");
// console.log(res);

// fs.readFile("./03FileHandling/files/contacts.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data);
//     }
// });

// // Append File or Add Data to File
// fs.appendFileSync("./03FileHandling/files/append.txt", new Date().getDate().toLocaleString());

// // Copy File
// fs.cpSync("./03FileHandling/files/append.txt", "./03FileHandling/files/Copy.txt");

// // Delete File
// fs.unlinkSync("./03FileHandling/files/Copy.txt");


// File Stat
const fileStat = fs.statSync("./03FileHandling/files/contacts.txt");
console.log(fileStat)


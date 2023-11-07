const fs = require("fs");    // File System

// Write a file
/*
fs.writeFile("message.txt", "Hello from Node.js", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");    // Callback
});
*/

// Read a file
fs.readFile("message.txt", "utf-8", (err, data) => {
    if(err) throw err
    console.log(data)
});